
import './Profile_men'
import Profile_men from './Profile_men';
import Profile_female from './Profile_female';

const fakedata = [...Profile_men, ...Profile_female];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakedata);

export default fakedata;


