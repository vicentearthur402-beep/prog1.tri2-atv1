// Command Line Interface

const params = process.argv;
const command = params[2];

if (command === "add") {
    const value = params[3];
    console.log("Aqui vai a lógica de adicionar: " + value);
    process.exit(0);
}

 console.log("não entrou em if nenhum")