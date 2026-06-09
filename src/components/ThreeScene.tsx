'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100)
    camera.position.z = 4

    // Sphere de particules principale
    const sphereGeo = new THREE.SphereGeometry(1.4, 64, 64)
    const positions = sphereGeo.attributes.position.array as Float32Array
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

    const mat = new THREE.PointsMaterial({
      color: 0xf97316,
      size: 0.025,
      transparent: true,
      opacity: 0.85,
    })
    const sphere = new THREE.Points(geo, mat)
    scene.add(sphere)

    // Anneau orbital
    const ringGeo = new THREE.TorusGeometry(2.1, 0.008, 8, 120)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.2 })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3
    scene.add(ring)

    // Deuxième anneau
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.005, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.15 })
    )
    ring2.rotation.x = -Math.PI / 4
    ring2.rotation.y = Math.PI / 6
    scene.add(ring2)

    // Particules flottantes autour
    const floatCount = 200
    const floatPositions = new Float32Array(floatCount * 3)
    for (let i = 0; i < floatCount; i++) {
      const r = 2.5 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      floatPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      floatPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      floatPositions[i * 3 + 2] = r * Math.cos(phi)
    }
    const floatGeo = new THREE.BufferGeometry()
    floatGeo.setAttribute('position', new THREE.Float32BufferAttribute(floatPositions, 3))
    const floatMat = new THREE.PointsMaterial({ color: 0xfbbf24, size: 0.018, transparent: true, opacity: 0.5 })
    const floats = new THREE.Points(floatGeo, floatMat)
    scene.add(floats)

    // Mouse parallax
    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4
    }
    window.addEventListener('mousemove', onMouseMove)

    // Resize
    const onResize = () => {
      const nw = mount.clientWidth
      const nh = mount.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = Date.now() * 0.001

      sphere.rotation.y = t * 0.12
      sphere.rotation.x = t * 0.06
      ring.rotation.z = t * 0.08
      ring2.rotation.z = -t * 0.05
      ring2.rotation.x = -Math.PI / 4 + Math.sin(t * 0.3) * 0.1
      floats.rotation.y = t * 0.04

      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (-mouseY - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
