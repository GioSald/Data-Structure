contests.sort((a,b) => b[0] - a[0])
let luck = 0

for (let c of contests) {
    if (c[1] === 0) luck += c[0]
    else if (k > 0) {
        luck += c[0]
        k--
    } else luck -= c[0]
}

return luck
