const notifyDerifyConfig = { serverId: 2960, active: true };

const notifyDerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_2960() {
    return notifyDerifyConfig.active ? "OK" : "ERR";
}

console.log("Module notifyDerify loaded successfully.");