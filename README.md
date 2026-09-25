<div align="center">

# 🛡️ Olympiad Edge Ecosystem Router

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg?style=for-the-badge)](https://github.com/rayaantasnim/olympiad-edge-router)
[![Version](https://img.shields.io/badge/Version-v2.4.0--RELEASE-orange.svg?style=for-the-badge)](https://github.com/rayaantasnim/olympiad-edge-router/releases)
[![Coverage](https://img.shields.io/badge/Coverage-98.4%25-success.svg?style=for-the-badge)](https://github.com/rayaantasnim/olympiad-edge-router)
[![Architecture](https://img.shields.io/badge/Architecture-6--Wings-purple.svg?style=for-the-badge)](#-core-wings-architecture)

<img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" alt="Olympiad Edge Ecosystem Router Architecture" width="800" height="350" style="border-radius: 8px; margin: 15px 0;" />

**Author:** Rayaan Tasnim  
*A resilient, low-latency, distributed edge-routing ecosystem engineered for competitive programming environments, real-time Olympiad evaluation platforms, and fault-tolerant microservice architectures.*

</div>

---

## 📌 Architectural Overview

The **Olympiad Edge Ecosystem Router** serves as the primary ingress and orchestration layer for high-throughput, low-latency computational networks. Designed specifically for the stringent demands of high-stakes competitive programming platforms, it manages traffic distribution, state isolation, judge-node dispatching, real-time telemetry, dynamic caching, and hardware access acceleration.

---

## 💎 Core Wings Architecture

The routing infrastructure is divided into **6 isolated processing wings**, each responsible for a distinct boundary in the network lifespan of an execution request:

<table>
  <thead>
    <tr>
      <th width="15%">Wing</th>
      <th width="20%">Primary Domain</th>
      <th width="35%">Core Responsibilities</th>
      <th width="30%">Target SLA / Metric</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>AMETHYST</strong></td>
      <td>Ingress & Routing</td>
      <td>L7 Load Balancing, Token-Bucket Throttling, Edge TLS Termination</td>
      <td>&lt; 2ms Routing Overhead</td>
    </tr>
    <tr>
      <td><strong>SAPPHIRE</strong></td>
      <td>Compute Engine</td>
      <td>Isolated Container Scheduling, Judge Dispatch, Sandbox Interfacing</td>
      <td>99.999% Execution Delivery</td>
    </tr>
    <tr>
      <td><strong>AQUAMARINE</strong></td>
      <td>State & Storage</td>
      <td>Distributed Redis/Raft Consensus, Sub-millisecond Cache Invalidation</td>
      <td>Sub-millisecond Read Latency</td>
    </tr>
    <tr>
      <td><strong>EMERALD</strong></td>
      <td>Security & Access</td>
      <td>OAuth2/mTLS Authentication, Zero-Trust Inter-Wing Isolation</td>
      <td>Zero-Trust Policy Enforcement</td>
    </tr>
    <tr>
      <td><strong>RUBY</strong></td>
      <td>Observability</td>
      <td>Prometheus Metrics Collector, Real-Time Distributed Tracing</td>
      <td>100,000 req/sec Log Streaming</td>
    </tr>
    <tr>
      <td><strong>TOPAZ</strong></td>
      <td>Hardware Acceleration</td>
      <td>FPGA/GPU Pass-through, Direct Memory Access (DMA) Offloading</td>
      <td>10x Throughput Amplification</td>
    </tr>
  </tbody>
</table>

<div align="center">
  <img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg" alt="Data Flow Network" width="700" height="250" style="border-radius: 6px;" />
</div>

---

## 🧩 System Topology Matrix

Explore the 23 core modules driving the Olympiad Edge Ecosystem Router:

<details>
<summary><b>1. AMETHYST Gateway Ingress Node</b> — <i>Click to expand topology details</i></summary>

* **Type:** Ingress Layer
* **Protocol:** HTTP/3, gRPC, WebSocket
* **Function:** Entry point for all inbound user submissions and API requests. Executes edge-level SSL termination and GEO-IP filtering.
</details>

<details>
<summary><b>2. AMETHYST Dynamic Traffic Shaper</b></summary>

* **Type:** Traffic Control
* **Protocol:** TCP/UDP
* **Function:** Implements leaky-bucket rate limiting to prevent DDOS attacks during high-volume contest starts.
</details>

<details>
<summary><b>3. AMETHYST Circuit Breaker Mesh</b></summary>

* **Type:** Resiliency
* **Protocol:** Internal IPC
* **Function:** Automatically trips and reroutes traffic when downstream submission queues experience high failure rates.
</details>

<details>
<summary><b>4. AMETHYST Protocol Transpiler</b></summary>

* **Type:** Adapter
* **Protocol:** REST to gRPC
* **Function:** Translates incoming legacy REST requests into high-performance gRPC calls for internal consumption.
</details>

<details>
<summary><b>5. SAPPHIRE Judge Dispatcher Engine</b></summary>

* **Type:** Scheduler
* **Protocol:** gRPC
* **Function:** Schedules contest code submissions across available judge nodes based on hardware load and memory availability.
</details>

<details>
<summary><b>6. SAPPHIRE Sandbox Environment Wrapper</b></summary>

* **Type:** Security Sandbox
* **Protocol:** Linux namespaces / cgroups v2
* **Function:** Guarantees strict isolated memory and CPU limits per submission runtime to prevent system exploitation.
</details>

<details>
<summary><b>7. SAPPHIRE Real-Time Evaluation Queue</b></summary>

* **Type:** Queue
* **Protocol:** AMQP / RabbitMQ
* **Function:** Prioritizes live contest submissions over asynchronous test-case runs.
</details>

<details>
<summary><b>8. SAPPHIRE Execution Metrics Parser</b></summary>

* **Type:** Telemetry Parser
* **Protocol:** Direct Process stdout Pipe
* **Function:** Captures cycle-accurate CPU time, peak RAM usage, and exit codes from execution containers.
</details>

<details>
<summary><b>9. AQUAMARINE Global Memory Cache</b></summary>

* **Type:** Cache
* **Protocol:** RESP (Redis Serialization Protocol)
* **Function:** Caches problem statements, test cases, and global scoreboard states in high-speed RAM.
</details>

<details>
<summary><b>10. AQUAMARINE Raft Consensus Coordinator</b></summary>

* **Type:** Distributed Consensus
* **Protocol:** TCP Raft
* **Function:** Maintains single-source-of-truth state across distributed cluster nodes.
</details>

<details>
<summary><b>11. AQUAMARINE Data Synchronization Bridge</b></summary>

* **Type:** Database Sync
* **Protocol:** PostgreSQL Logical Replication
* **Function:** Asynchronously flushes evaluation results from transient cache to persistent relational storage.
</details>

<details>
<summary><b>12. AQUAMARINE Snapshot Manager</b></summary>

* **Type:** Backup System
* **Protocol:** Internal File Stream
* **Function:** Creates point-in-time system state snapshots to prevent data loss during sudden infrastructure failures.
</details>

<details>
<summary><b>13. EMERALD OAuth2/mTLS Gateway</b></summary>

* **Type:** Authentication
* **Protocol:** TLS 1.3 / HTTPS
* **Function:** Validates identity tokens and enforces mutual TLS authentication between service nodes.
</details>

<details>
<summary><b>14. EMERALD Policy Enforcement Point</b></summary>

* **Type:** Authorization
* **Protocol:** Open Policy Agent (OPA)
* **Function:** Evaluates fine-grained access control policies for contest administrators, participants, and automated bots.
</details>

<details>
<summary><b>15. EMERALD Key Management System Interface</b></summary>

* **Type:** Encryption
* **Protocol:** PKCS#11
* **Function:** Handles automated rotation and secure retrieval of secrets, JWT signing keys, and system certificates.
</details>

<details>
<summary><b>16. EMERALD Zero-Trust Isolation Guard</b></summary>

* **Type:** Network Security
* **Protocol:** eBPF / CNI
* **Function:** Enforces intra-cluster firewalls, blocking unauthorized cross-wing communication paths.
</details>

<details>
<summary><b>17. RUBY Prometheus Telemetry Collector</b></summary>

* **Type:** Metrics Gathering
* **Protocol:** HTTP Scraping
* **Function:** Exposes time-series counters and histograms for latency, memory utilization, and error rates.
</details>

<details>
<summary><b>18. RUBY Distributed Tracing Node</b></summary>

* **Type:** Tracing
* **Protocol:** OpenTelemetry / Jaeger
* **Function:** Correlates request life cycles from the initial HTTP hit down to the sandbox execution context.
</details>

<details>
<summary><b>19. RUBY Real-Time Alert Manager</b></summary>

* **Type:** Alerting
* **Protocol:** Webhook / PagerDuty API
* **Function:** Fires automated alerts when key SLAs breach pre-configured thresholds.
</details>

<details>
<summary><b>20. RUBY Structured Log Aggregator</b></summary>

* **Type:** Logging
* **Protocol:** Fluentd / Vector
* **Function:** Streams JSON-structured logs from all 6 wings into a centralized search repository.
</details>

<details>
<summary><b>21. TOPAZ Direct Memory Access Offloader</b></summary>

* **Type:** Hardware Driver
* **Protocol:** PCIe DMA
* **Function:** Enables direct file transfers between network interfaces and storage arrays, bypassing main CPU cycles.
</details>

<details>
<summary><b>22. TOPAZ FPGA Kernel Orchestrator</b></summary>

* **Type:** Acceleration
* **Protocol:** OpenCL / PCIe
* **Function:** Offloads string matching, diff comparisons, and hash validations to dedicated FPGA hardware accelerators.
</details>

<details>
<summary><b>23. TOPAZ GPU Task Scheduler</b></summary>

* **Type:** Compute Acceleration
* **Protocol:** CUDA / Vulkan
* **Function:** Accelerates AI-assisted plagiarism detection and parallel code analysis tasks across GPU clusters.
</details>

---

## 🚀 Quick Start & System Initialization

Ensure you have **Node.js >= v18.0.0**, **Docker**, and **gRPC C++ Plugins** installed.

### 1. Installation

Clone the repository and install core dependencies:

```bash
git clone [https://github.com/rayaantasnim/olympiad-edge-router.git](https://github.com/rayaantasnim/olympiad-edge-router.git)
cd olympiad-edge-router
npm install
