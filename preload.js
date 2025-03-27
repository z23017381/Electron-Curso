function establecerVersion(idSelector, version) {
    let elemento = document.getElementById(idSelector);

    if (elemento) {
        elemento.innerText = version;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const componentes = ['Node', 'chromium', 'Electron']
    
    for(const componente of componentes){
        establecerVersion('version${componente}', process.versions[componente]);
    }
});