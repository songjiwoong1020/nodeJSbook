function solution(n, arr1, arr2) {
    let answer = new Array(n);
    
    for(let i=0; i<n; i++){
        
        let jido1 = arr1[i].toString(2);
        let jido2 = arr2[i].toString(2);
        if(jido1.length < n){
            let nimi = n - jido1.length;
            for(let a = 1; a <= nimi; a++){
                jido1 = '0'.concat(jido1);
            }
        }
        if(jido2.length < n){
            let nimi = n - jido2.length;
            for(let a = 1; a <= nimi; a++){
                jido2 = '0'.concat(jido2);
            }
        }
        for(let j=0; j<n; j++){
            if(jido1.substr(j, 1) === '1' || jido2.substr(j, 1) === '1'){
                answer[i] += '#';
            } else {
                answer[i] += ' ';
            }
            answer[i].replace('  ', ' ');
        }

        answer[i] = answer[i].substr(9);
    }
    console.log(answer);

    return answer;
}

function solution2(n) {
    var step1 = String(n);
    console.log(typeof(step1));
    var step2 = [];
    for(let i = 0; i < step1.length; i++){
        step2[i] = step1.substr(i, 1);
    }
    console.log(step2);
    var answer = step2.reverse();
    console.log(answer);
    return answer;
}

function solution3(n, lost, reserve) {
    
    var answer = n - lost.length;

    for(let i = 0; i < n; i++){
        lost[i]
    }

    console.log(answer);
    return answer;
}

solution3(5, [2, 4], [1, 3, 5]);
solution3(5, [2, 4], [3]);