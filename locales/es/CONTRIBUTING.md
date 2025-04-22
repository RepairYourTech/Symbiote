# Contribuir a Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Basado en <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Bifurcado%20de-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Bifurcado de Roo Code">
  </a>
</div>

Estamos encantados de que estés interesado en contribuir a Symbiote. Ya sea que estés arreglando un error, añadiendo una función o mejorando nuestra documentación, ¡cada contribución hace que Symbiote sea más inteligente! Para mantener nuestra comunidad vibrante y acogedora, todos los miembros deben adherirse a nuestro [Código de Conducta](CODE_OF_CONDUCT.md).

## Participación en la comunidad

Animamos a todos los colaboradores a participar en la comunidad de Symbiote a través de GitHub:

- Utiliza GitHub Discussions para preguntas e ideas
- Participa en discusiones de issues para proporcionar feedback
- Revisa pull requests de otros colaboradores
- Comparte tus experiencias usando Symbiote
- Conéctate con otros desarrolladores que trabajan en proyectos similares

## Reportar errores o problemas

¡Los informes de errores ayudan a mejorar Symbiote para todos! Antes de crear un nuevo issue, por favor [busca entre los existentes](https://github.com/RepairYourTech/Symbiote/issues) para evitar duplicados. Cuando estés listo para reportar un error, dirígete a nuestra [página de issues](https://github.com/RepairYourTech/Symbiote/issues/new/choose) donde encontrarás una plantilla para ayudarte a completar la información relevante.

> **Importante:** Si descubres una vulnerabilidad de seguridad, por favor utiliza la [herramienta de seguridad de GitHub para reportarla de forma privada](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Decidir en qué trabajar

¿Buscas una buena primera contribución? Revisa los issues etiquetados con "good first issue" en nuestra [página de Issues de Symbiote](https://github.com/RepairYourTech/Symbiote/issues). ¡Estos están específicamente seleccionados para nuevos colaboradores y áreas donde nos encantaría recibir ayuda!

¡También damos la bienvenida a contribuciones a nuestra documentación! Ya sea arreglando errores tipográficos, mejorando guías existentes o creando nuevo contenido educativo - nos encantaría construir un repositorio de recursos impulsado por la comunidad que ayude a todos a sacar el máximo provecho de Symbiote.

Si estás planeando trabajar en una función más grande, por favor crea una [solicitud de función](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests) primero para que podamos discutir si se alinea con la visión de Symbiote. También puedes consultar nuestra [Hoja de Ruta del Proyecto](#hoja-de-ruta-del-proyecto) a continuación para ver si tu idea encaja con nuestra dirección estratégica.

## Hoja de Ruta del Proyecto

Symbiote tiene una hoja de ruta de desarrollo que guía nuestras prioridades y dirección futura. Entender nuestra hoja de ruta puede ayudarte a:

- Alinear tus contribuciones con los objetivos del proyecto
- Identificar áreas donde tu experiencia sería más valiosa
- Entender el contexto detrás de ciertas decisiones de diseño
- Encontrar inspiración para nuevas funciones que apoyen nuestra visión

Nuestra hoja de ruta actual se centra en estos pilares clave:

### Soporte de Proveedores

Nuestro objetivo es dar soporte a tantos proveedores de IA como sea posible:

- Soporte versátil para "OpenAI Compatible"
- Soporte para los principales proveedores de IA incluyendo Anthropic, Google, xAI, Microsoft Azure AI, y más
- Soporte mejorado para modelos locales a través de Ollama y plataformas similares

### Privacidad y Seguridad

Priorizamos la privacidad y seguridad del usuario:

- Sin telemetría ni recolección de datos
- Opciones de procesamiento local cuando sea posible
- Manejo transparente de los datos del usuario

### Soporte de Sistemas

Queremos que Symbiote funcione bien en el ordenador de todos:

- Integración de terminal multiplataforma
- Soporte sólido y consistente para Mac, Windows y Linux

### Documentación

Queremos una documentación completa y accesible para todos los usuarios y colaboradores:

- Guías de usuario y tutoriales ampliados
- Documentación clara de la API
- Mejor orientación para colaboradores
- Recursos de documentación multilingües

### Estabilidad

Queremos disminuir significativamente el número de errores y aumentar las pruebas automatizadas:

- Cobertura de pruebas completa
- Capacidades de registro de depuración
- Proceso simplificado de reporte de errores

### Internacionalización

Queremos que Symbiote sea accesible para usuarios de todo el mundo:

- Soporte para múltiples idiomas en la interfaz
- Documentación localizada
- Esfuerzos de traducción impulsados por la comunidad

Damos especialmente la bienvenida a contribuciones que avancen nuestros objetivos de la hoja de ruta. Si estás trabajando en algo que se alinea con estos pilares, por favor menciónalo en la descripción de tu PR.

## Configuración de desarrollo

1. **Clona** el repositorio:

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Instala dependencias**:

```sh
npm run install:all
```

3. **Inicia la vista web (aplicación Vite/React con HMR)**:

```sh
npm run dev
```

4. **Depuración**:
   Presiona `F5` (o **Ejecutar** → **Iniciar depuración**) en VSCode para abrir una nueva sesión con Symbiote cargado.

Los cambios en la vista web aparecerán inmediatamente. Los cambios en la extensión principal requerirán un reinicio del host de extensión.

Alternativamente, puedes construir un archivo .vsix e instalarlo directamente en VSCode:

```sh
npm run build
```

Un archivo `.vsix` aparecerá en el directorio `bin/` que puede ser instalado con:

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Escribir y enviar código

Cualquiera puede contribuir con código a Symbiote, pero te pedimos que sigas estas pautas para asegurar que tus contribuciones puedan integrarse sin problemas:

1. **Mantén los Pull Requests enfocados**

    - Limita los PRs a una sola función o corrección de errores
    - Divide los cambios más grandes en PRs más pequeños y relacionados
    - Separa los cambios en commits lógicos que puedan revisarse independientemente

2. **Calidad del código**

    - Todos los PRs deben pasar las comprobaciones de CI que incluyen tanto linting como formateo
    - Soluciona cualquier advertencia o error de ESLint antes de enviar
    - Responde a todos los comentarios de Ellipsis, nuestra herramienta automatizada de revisión de código
    - Sigue las mejores prácticas de TypeScript y mantén la seguridad de tipos

3. **Pruebas**

    - Añade pruebas para nuevas funciones
    - Ejecuta `npm test` para asegurar que todas las pruebas pasen
    - Actualiza las pruebas existentes si tus cambios les afectan
    - Incluye tanto pruebas unitarias como de integración cuando sea apropiado

4. **Directrices para commits**

    - Escribe mensajes de commit claros y descriptivos
    - Haz referencia a los issues relevantes en los commits usando #número-de-issue

5. **Antes de enviar**

    - Haz rebase de tu rama sobre la última main
    - Asegúrate de que tu rama se construye correctamente
    - Comprueba que todas las pruebas están pasando
    - Revisa tus cambios para detectar código de depuración o logs de consola

6. **Descripción del Pull Request**
    - Describe claramente lo que hacen tus cambios
    - Incluye pasos para probar los cambios
    - Enumera cualquier cambio que rompa la compatibilidad
    - Añade capturas de pantalla para cambios en la interfaz de usuario

## Acuerdo de contribución

Al enviar un pull request, aceptas que tus contribuciones serán licenciadas bajo la misma licencia que el proyecto ([Apache 2.0](../LICENSE)).

## Reconocimiento

Esta guía de contribución está adaptada de [la guía de contribución de Roo Code](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md), con modificaciones para reflejar los requisitos y procesos específicos de Symbiote.
