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

function solution4(answers) {
    
    var answer = [];
    
    let supo2 = [];
    let supo3 = [];
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    for(let i = 0; i < answers.length; i++){
        
        var Tlqkf = [ , 1, ,3 , , 4, , 5];
        if(i%2 === 0){
            supo2[i] = 2;
        } else {
            supo2[i] = Tlqkf[i%8];
        }

        if(i%10 === 0 || i%10 === 1){
            supo3[i] = 3;
        } else if(i%10 === 2 || i%10 === 3) {
            supo3[i] = 1;
        } else if(i%10 === 4 || i%10 === 5){
            supo3[i] = 2;
        } else if(i%10 === 6 || i%10 === 7){
            supo3[i] = 4;
        } else {
            supo3[i] = 5;
        }
        
        
        if(answers[i] === (i%5)+1){
            score1++;
        }
        if(answers[i] === supo2[i]){
            score2++;
        }
        if(answers[i] === supo3[i]){
            score3++;
        }
    }
    if (score1 === score2 && score2 === score3) {
        answer[0] = 1;
        answer[1] = 2;
        answer[2] = 3;
    } else if(score1 > score2 && score1 > score3){
        answer[0] = 1;
    } else if (score2 > score3){
        answer[0] = 2;
    } else if(score1 === score2){
        answer[0] = 1;
        answer[1] = 2;
    } else if (score1 === score3){
        answer[0] = 1;
        answer[1] = 3;
    } else if (score2 === score3){
        answer[0] = 2;
        answer[1] = 3;
    } else {
        answer[0] = 3;
    }

    console.log(supo2);
    return answer;
}
// solution4([1, 2, 3, 4, 5]);
// solution4([1, 3, 2, 4, 2]);
// solution4([1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2]);

function sol(n){
    let count = 0;
    let isPrime = true;
    for(let i = 2; i <= n; i++){
        for(let j = 2; j <= n; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            count ++;
        }
        isPrime = true;
    }
    console.log(count);
    return count;
}

function solution5(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%divisor === 0){
            answer.push(arr[i]);
        }
    }
    if(answer.length === 0){
        answer.push(-1);
    } else {
        answer.sort(function(a, b){
            return a - b;
        });
    }
    console.log(answer);
    return answer;
}




function skillTrees(skill, skill_trees) {
    var answer = 0;

    for(let i = 0; i < skill_trees.length; i++){
        let userSkill = skill_trees[i];
        let arr = [];
        for(let j in skill){
            arr[j] = userSkill.indexOf(skill[j]);
        }
        console.log(arr);
    }



    return answer;
}

skillTrees("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
