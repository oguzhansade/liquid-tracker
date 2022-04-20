function formatGasoline(benzin,dizel,lpg) {
    const gasoline = []
    benzin.forEach(element => {
        const findBrand = gasoline.findIndex(x => x.marka === element.marka)
        if (findBrand > -1) {
            gasoline[findBrand].benzin = element.benzin
        } else {
            gasoline.push({marka:element.marka,benzin:element.benzin})
        }
    });

    dizel.forEach(element => {
        const findBrand = gasoline.findIndex(x => x.marka === element.marka)
        if (findBrand > -1) {
            gasoline[findBrand].dizel = element.dizel
        } else {
            gasoline.push({marka:element.marka,dizel:element.dizel})
        }
    });

    lpg.forEach(element => {
        const findBrand = gasoline.findIndex(x => x.marka === element.marka)
        if (findBrand > -1) {
            gasoline[findBrand].lpg = element.lpg
        } else {
            gasoline.push({marka:element.marka,lpg:element.lpg})
        }
    });

    return gasoline.sort((a,b)=> a.benzin - b.dizel)
}

export default formatGasoline