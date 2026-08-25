---
name: warrior-components
description: Diseña, crea y mantiene componentes reutilizables para Warrior Code siguiendo su arquitectura de monorepo, separación de responsabilidades y filosofía de reutilización.
---

# Warrior Code Components

## Objetivo

Crear componentes reutilizables para Warrior Code
que permitan construir diferentes webs a partir de piezas compartidas.

## Principios

- Reutilizar componentes existentes antes de crear nuevos.
- Mantener los componentes genéricos independientes del negocio.
- Separar componentes compartidos de código específico de una aplicación.
- Utilizar `packages/ui` para componentes reutilizables.
- Mantener código específico de Warrior Code en `apps/website`.
- Separar datos y contenido de la presentación.
- Utilizar props y configuración para personalizar componentes.
- Utilizar tokens semánticos y themes.
- Evitar texto y contenido de negocio hardcodeado.
- Evitar duplicar componentes con responsabilidades similares.
- Evitar abstraer componentes antes de existir una necesidad real.
- Mantener APIs simples y predecibles.

## Antes de modificar

1. Inspeccionar la estructura existente.
2. Buscar componentes reutilizables en `packages/ui`.
3. Identificar componentes similares antes de crear uno nuevo.
4. Determinar si el componente es genérico, de dominio o específico de una aplicación.
5. Revisar las props y datos necesarios.
6. Identificar los tokens y themes existentes.

## Después de modificar

- Comprobar que el componente sea reutilizable.
- Comprobar que no contenga contenido específico innecesario.
- Comprobar separación entre datos y presentación.
- Comprobar que no existan duplicaciones.
- Comprobar exports y dependencias.
- Comprobar responsive y accesibilidad básica.
- Comprobar que las aplicaciones existentes no se hayan roto.