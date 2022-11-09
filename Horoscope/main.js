document.querySelector('.submit').addEventListener('click', gethoroscope)


function gethoroscope (){
    const month = new Date(document.querySelector('.inputdate').value).getMonth()+1;
    const day = new Date(document.querySelector('.inputdate').value).getDate()+1;
    console.log (month,day);

    if ((month == 12 && day >= 22)|| (month == 1 && day <= 19)) {
        console.log (month,day)
    document.querySelector('.results').innerText = 'Capricorn (Goat)';
    }else if ((month == 1 && day >= 20)|| (month == 2 && day <= 18)) {

    document.querySelector('.results').innerText = 'Aquarius (Water Bearer)';
    }else if ((month == 2 && day >= 19)|| (month == 3 && day <= 19)) {

    document.querySelector('.results').innerText = 'Psces (Fish)';
    }else if ((month == 3 && day >= 20)|| (month == 4 && day <= 18)) {

    document.querySelector('.results').innerText = 'Aries(Ram)';
    }else if ((month == 4 && day >= 19)|| (month == 5 && day <= 20)) {

    document.querySelector('.results').innerText = 'Taurus (Bull)';
    }else if ((month == 5 && day >= 21)|| (month == 6 && day <= 20)) {

    document.querySelector('.results').innerText = 'Gemini (Twins)';
    }else if ((month == 6 && day >= 21)|| (month == 7 && day <= 22)) {

    document.querySelector('.results').innerText = 'Cancer (Crab)';
    }else if ((month == 7 && day >= 23)|| (month == 8 && day <= 22)) {

    document.querySelector('.results').innerText = 'Leo (Lion)';
    }else if ((month == 8 && day >= 23)|| (month == 9 && day <= 22)) {

    document.querySelector('.results').innerText = 'Virgo (Virgin)';
    }else if ((month == 9 && day >= 23)|| (month == 10 && day <= 22)) {

    document.querySelector('.results').innerText = 'Libra (Balance)';
    }else if ((month == 10 && day>= 23)|| (month == 11 && day <= 21)) {

    document.querySelector('.results').innerText = 'The ultimate sign: Scorpio (Scorpion)';
    }else if ((month == 11 && day >= 22)|| (month == 12 && day <= 21)) {

    document.querySelector('.results').innerText = 'Sagittarius (Archer)';
    }else 
    document.querySelector('.results').innerText = 'why this, just pick one already';
}
