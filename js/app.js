AFRAME.registerComponent('model-handler', {
  init: function () {
    const sceneEl = this.el;
    const totalTargets = 10; // Número de marcadores definidos en targets.mind

    for (let i = 0; i < totalTargets; i++) {
      // Crear entidad que representa cada marcador
      const target = document.createElement('a-entity');
      target.setAttribute('mindar-image-target', `targetIndex: ${i}`);

      // Contenedor del modelo (ajustable por transformación general)
      const container = document.createElement('a-entity');
      container.setAttribute('position', '0 0 0');
      container.setAttribute('rotation', '90 0 0');
      container.setAttribute('scale', '1.5 1.5 1.5');
      container.setAttribute('shadow', 'cast: true; receive: true');

      // Modelo 3D
      const model = document.createElement('a-gltf-model');
      model.setAttribute('src', '#model');
      model.setAttribute('shadow', 'cast: true; receive: true');

      // Ensamblar
      container.appendChild(model);
      target.appendChild(container);
      sceneEl.appendChild(target);
    }
  }
});

// Ejecutar el componente al cargar la escena
document.querySelector('a-scene').setAttribute('model-handler', '');
