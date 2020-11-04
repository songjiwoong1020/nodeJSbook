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

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]);