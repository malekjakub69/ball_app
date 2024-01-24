export const addStats = (key: string) =>{
    const stats = localStorage.getItem("stats");
    if(stats){
        const parsedStats = JSON.parse(stats);
        if(parsedStats[key]){
            parsedStats[key]++;
        }else{
            parsedStats[key] = 1;
        }
        localStorage.setItem("stats", JSON.stringify(parsedStats));
    }else{
        localStorage.setItem("stats", JSON.stringify({[key]: 1}));
    }
}