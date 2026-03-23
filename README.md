# Práctica: CI/CD de una aplicación 🚀
**Bootcamp DevOps & Cloud Computing**

Este repositorio contiene la implementación completa de un flujo de Integración y Entrega/Despliegue Continuo (CI/CD) para una aplicación web basada en Node.js, desplegada en un clúster de Kubernetes utilizando el modelo GitOps.

## 📋 Descripción del Proyecto
La aplicación es una API sencilla en Express.js que ha sido dockerizada. El ciclo de vida del código está automatizado mediante **GitHub Actions**, garantizando la calidad, seguridad y entrega del artefacto, culminando con el despliegue automático gestionado por **ArgoCD**.

### 🛠️ Herramientas Utilizadas
* **Lenguaje:** Node.js (Gestión de dependencias con `npm`)
* **CI/CD Pipeline:** GitHub Actions
* **Gestión de Ramas:** Git Flow (`develop` y `main`)
* **Análisis Estático (SAST):** SonarCloud
* **Análisis de Vulnerabilidades:** Snyk
* **Repositorio de Artefactos:** Docker Hub
* **Despliegue Continuo (GitOps):** ArgoCD
* **Orquestación:** Kubernetes (Minikube)

---

## ⚙️ Arquitectura del Pipeline

El flujo de trabajo sigue la estrategia de Git Flow y se divide en las siguientes etapas dentro de GitHub Actions:

1. **Integración Continua (CI) - Se ejecuta en `develop` y `main`:**
   - Construcción de la aplicación y resolución de dependencias.
   - Ejecución de Linters (`ESLint`) para mantener el estándar del código.
   - Ejecución de Tests Unitarios (`Jest`) con generación de reporte de cobertura (Coverage).
   - Análisis estático de código mediante **SonarCloud** (Quality Gate).
   - Escaneo de vulnerabilidades en dependencias mediante **Snyk**.

2. **Entrega Continua (Continuous Delivery) - Se ejecuta SOLO en `main`:**
   - Construcción de la imagen Docker de la aplicación.
   - Etiquetado de la imagen con el tag `latest` y el SHA del commit.
   - Publicación del artefacto generado en **Docker Hub**.

3. **Despliegue Continuo (Continuous Deployment) - Vía ArgoCD:**
   - ArgoCD monitoriza la carpeta `k8s/` de este repositorio.
   - Al detectar cambios en los manifiestos (Deployment, Service), sincroniza automáticamente el estado del clúster de Kubernetes, descargando la última imagen de Docker Hub y desplegando los pods.

---

## 📸 Entregables y Evidencias

A continuación se presentan las evidencias de la correcta ejecución de cada paso de la práctica:

### 1. Repositorios y Configuración
* **Enlace al repositorio de GitHub:** [https://github.com/yfpadron/kc-ci-cd]
* **Enlace al repositorio de artefactos:** [https://hub.docker.com/repositories/yfpadron]
* **Fichero del Pipeline CI/CD:** El pipeline está configurado en `.github/workflows/ci-cd.yml`.
* **Manifiestos de Kubernetes:** Ubicados en el directorio `/k8s` (`deployment.yaml` y `service.yaml`).

### 2. Ejecución del Pipeline CI/CD (GitHub Actions)
*A continuación se evidencia la ejecución exitosa de los Jobs de Build, Test y Delivery en la rama principal tras un Pull Request:*
> <img width="876" height="497" alt="Captura de pantalla 2026-03-23 161844" src="https://github.com/user-attachments/assets/359a72dd-3ef5-4343-a8ce-4e172d2548ca" />

### 3. Análisis de Código y Seguridad
**SonarCloud (Quality Gate):**
> <img width="1388" height="754" alt="Captura de pantalla 2026-03-23 183035" src="https://github.com/user-attachments/assets/07b154bc-855c-4e93-833e-ad3a6cbfd379" />

**Snyk (Vulnerabilidades):**
> <img width="1657" height="295" alt="Captura de pantalla 2026-03-23 183400" src="https://github.com/user-attachments/assets/0d51490e-c457-43dc-82df-844273a56434" />

### 4. Despliegue en Kubernetes con ArgoCD
**Proyecto Sincronizado en ArgoCD:**
*Se evidencia el estado "Healthy" y "Synced", demostrando que ArgoCD leyó los manifiestos y levantó los recursos correctamente.*
> <img width="833" height="635" alt="Captura de pantalla 2026-03-23 181733" src="https://github.com/user-attachments/assets/167e5dfd-31c2-477a-8571-d92d960ea8e8" />

### 5. Aplicación Final Desplegada
*Prueba de acceso a la aplicación mediante Port-Forwarding hacia el servicio de Kubernetes:*
> <img width="538" height="158" alt="Captura de pantalla 2026-03-23 181916" src="https://github.com/user-attachments/assets/daa3ec4c-8be2-4285-b0ee-193fcadc5dd1" />

---
## 🎥 Vídeo Explicativo
En el siguiente vídeo se explica de forma dinámica la arquitectura de este proyecto y se demuestra el funcionamiento del pipeline y el despliegue:

👉 **YouTube**
