
    getRandomInt(1, 10); {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(10);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    }
