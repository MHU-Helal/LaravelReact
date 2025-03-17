import React, { useState, useEffect } from 'react';
import './names.css'; // Include CSS for styling and animations

const motivationalData = [
  { title: 'Stay Positive', message: 'Every day is a new beginning. Take a deep breath and start again.' },
  { title: 'Believe in Yourself', message: 'You are capable of amazing things. Trust your journey.' },
  { title: 'Never Give Up', message: 'The harder you work for something, the greater you’ll feel when you achieve it.' },
  { title: 'Embrace Challenges', message: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.' },
  { title: 'Keep Learning', message: 'An investment in knowledge always pays the best interest.' },
];


const Names = () => {
    const namesOfAllah = [
        { name: "Ar-Rahman", arabic: "الرَّحمَن", bangla: "সর্বাধিক দয়ালু", english: "The Most Gracious" },
        { name: "Ar-Rahim", arabic: "الرَّحِيم", bangla: "অত্যন্ত দয়ালু", english: "The Most Merciful" },
        { name: "Al-Malik", arabic: "الْمَلِك", bangla: "সর্বশক্তিমান", english: "The King, The Sovereign" },
        { name: "Al-Quddus", arabic: "الْقُدُّوس", bangla: "পবিত্র", english: "The Most Sacred" },
        { name: "As-Salam", arabic: "السَّلاَم", bangla: "শান্তি", english: "The Source of Peace" },
        { name: "Al-Mu’min", arabic: "الْمُؤْمِن", bangla: "বিশ্বাসী", english: "The Giver of Faith" },
        { name: "Al-Muhaymin", arabic: "الْمُهَيْمِن", bangla: "রক্ষাকারী", english: "The Guardian" },
        { name: "Al-Aziz", arabic: "الْعَزِيز", bangla: "অত্যন্ত শক্তিশালী", english: "The Almighty" },
        { name: "Al-Jabbar", arabic: "الْجَبَّار", bangla: "জবরদস্ত", english: "The Compeller" },
        { name: "Al-Mutakabbir", arabic: "الْمُتَكَبِّر", bangla: "গর্বিত", english: "The Supreme" },
        { name: "Al-Khaliq", arabic: "الخَالِق", bangla: "সৃষ্টিকারী", english: "The Creator" },
        { name: "Al-Bari", arabic: "الْبَارِئ", bangla: "পরিপূর্ণ সৃষ্টিকর্তা", english: "The Evolver" },
        { name: "Al-Musawwir", arabic: "الْمُصَوِّر", bangla: "রূপদানকারী", english: "The Fashioner" },
        { name: "Al-Ghaffar", arabic: "الغَفَّار", bangla: "অনেক ক্ষমাশীল", english: "The Constant Forgiver" },
        { name: "Al-Qahhar", arabic: "الْقَهَّار", bangla: "অত্যন্ত জয়ী", english: "The All-Prevailing One" },
        { name: "Al-Wahhab", arabic: "الوَهَّاب", bangla: "দানকারী", english: "The Supreme Bestower" },
        { name: "Ar-Razzaq", arabic: "الرَّزَّاق", bangla: "জীবিকাদাতা", english: "The Provider" },
        { name: "Al-Fattah", arabic: "الْفَتَّاح", bangla: "বিনাস্বরূপ", english: "The Supreme Opener" },
        { name: "Al-`Alim", arabic: "الْعَلِيم", bangla: "জ্ঞানী", english: "The All-Knowing" },
        { name: "Al-Qabid", arabic: "القَابِض", bangla: "সঙ্কুচিতকারী", english: "The Withholder" },
        { name: "Al-Basit", arabic: "البَاسِط", bangla: "বিশালকারী", english: "The Extender" },
        { name: "Al-Khafid", arabic: "الْخَافِض", bangla: "নিম্নকারী", english: "The Reducer" },
        { name: "Ar-Rafi", arabic: "الرَّافِع", bangla: "উচ্চকারী", english: "The Exalter" },
        { name: "Al-Mu’izz", arabic: "المُعِز", bangla: "সম্মানদাতা", english: "The Honourer" },
        { name: "Al-Mudhill", arabic: "الْمُذِل", bangla: "অবমাননাকারী", english: "The Dishonourer" },
        { name: "As-Sami", arabic: "السَّامِع", bangla: "শ্রোতা", english: "The All-Hearing" },
        { name: "Al-Basir", arabic: "البَصِير", bangla: "দ্রষ্টা", english: "The All-Seeing" },
        { name: "Al-Hakam", arabic: "الحَكَم", bangla: "বিচারক", english: "The Impartial Judge" },
        { name: "Al-`Adl", arabic: "الْعَدْل", bangla: "ন্যায়পরায়ণ", english: "The Utterly Just" },
        { name: "Al-Latif", arabic: "اللَّطِيف", bangla: "সদয়", english: "The Subtle One" },
        { name: "Al-Khabir", arabic: "الخَبِير", bangla: "সচেতন", english: "The All-Aware" },
        { name: "Al-Halim", arabic: "الحَلِيم", bangla: "ধৈর্যশীল", english: "The Forbearing" },
        { name: "Al-Azim", arabic: "الْعَظِيم", bangla: "বিশাল", english: "The Magnificent" },
        { name: "Al-Ghafur", arabic: "الغَفُور", bangla: "ক্ষমাশীল", english: "The Great Forgiver" },
        { name: "Ash-Shakur", arabic: "الشَّكُور", bangla: "কৃতজ্ঞতা প্রকাশকারী", english: "The Most Appreciative" },
        { name: "Al-`Aliyy", arabic: "الْعَلِيُّ", bangla: "উচ্চ", english: "The Most High" },
        { name: "Al-Kabir", arabic: "الْكَبِير", bangla: "বড়", english: "The Most Great" },
        { name: "Al-Hafiz", arabic: "الحَفِيظ", bangla: "সংরক্ষণকারী", english: "The Preserver" },
        { name: "Al-Muqit", arabic: "المُقيِت", bangla: "পুষ্টিকারী", english: "The Sustainer" },
        { name: "Al-Hasib", arabic: "الحَسِيب", bangla: "পর্যাপ্ত", english: "The Reckoner" },
        { name: "Al-Jalil", arabic: "الجَلِيل", bangla: "মহান", english: "The Majestic" },
        { name: "Al-Karim", arabic: "الكَرِيم", bangla: "দয়ালু", english: "The Most Generous" },
        { name: "Ar-Raqib", arabic: "الرَّقِيب", bangla: "সতর্ক", english: "The Watchful" },
        { name: "Al-Mujib", arabic: "المُجِيب", bangla: "প্রত্যুত্তরকারী", english: "The Responsive" },
        { name: "Al-Wasi`", arabic: "الْوَاسِع", bangla: "বিশাল", english: "The All-Encompassing" },
        { name: "Al-Hakim", arabic: "الحَكِيم", bangla: "জ্ঞানী", english: "The All-Wise" },
        { name: "Al-Wadud", arabic: "الْوَدُود", bangla: "প্রেমময়", english: "The Most Loving" },
        { name: "Al-Majid", arabic: "الْمَجِيد", bangla: "মহিমান্বিত", english: "The Most Glorious" },
        { name: "Al-Ba'ith", arabic: "الْبَاعِث", bangla: "জীবিতকারী", english: "The Infuser of New Life" },
        { name: "Ash-Shahid", arabic: "الشَّهِيد", bangla: "সাক্ষী", english: "The All Observing Witness" },
        { name: "Al-Haqq", arabic: "الْحَقَّ", bangla: "সত্য", english: "The Absolute Truth" },
        { name: "Al-Wakil", arabic: "الْوَكِيل", bangla: "ভরসাযোগ্য", english: "The Trustee" },
        { name: "Al-Qawiyy", arabic: "القَوِيّ", bangla: "শক্তিশালী", english: "The All-Strong" },
        { name: "Al-Matin", arabic: "المَتِين", bangla: "অত্যন্ত দৃঢ়", english: "The Firm" },
        { name: "Al-Waliyy", arabic: "الْوَلِي", bangla: "সাহায্যকারী", english: "The Protecting Associate" },
        { name: "Al-Hamid", arabic: "الْحَمِيد", bangla: "প্রশংসনীয়", english: "The Praiseworthy" },
        { name: "Al-Muhsi", arabic: "المُحْصِي", bangla: "গণনাকারী", english: "The All-Enumerating" },
        { name: "Al-Mubdi", arabic: "المُبْدِئ", bangla: "আরম্ভকারী", english: "The Initiator" },
        { name: "Al-Mu’id", arabic: "المُعِيد", bangla: "পুনঃপ্রবর্তনকারী", english: "The Restorer" },
        { name: "Al-Muhyi", arabic: "المُحْيِي", bangla: "জীবিতকারী", english: "The Giver of Life" },
        { name: "Al-Mumit", arabic: "المُمِيت", bangla: "মৃত্যু দেওয়া", english: "The Creator of Death" },
        { name: "Al-Hayy", arabic: "الْحَيِّي", bangla: "চিরন্তন", english: "The Ever-Living" },
        { name: "Al-Qayyum", arabic: "الْقَيُّوم", bangla: "অস্থিতিশীল", english: "The Sustainer" },
        { name: "Al-Wajid", arabic: "الْوَاجِد", bangla: "পাওয়া", english: "The Perceiver" },
        { name: "Al-Majid", arabic: "الْمَجِيد", bangla: "মহিমান্বিত", english: "The Illustrious" },
        { name: "Al-Wahid", arabic: "الواحِد", bangla: "একমাত্র", english: "The One" },
        { name: "Al-Ahad", arabic: "الْأَحَد", bangla: "অদ্বিতীয়", english: "The Unique" },
        { name: "As-Samad", arabic: "الصَّمَد", bangla: "প্রয়োজনীয়", english: "The Eternal" },
        { name: "Al-Qadir", arabic: "الْقَادِر", bangla: "ক্ষমতাশালী", english: "The Omnipotent" },
        { name: "Al-Muqtadir", arabic: "المُقْتَدِر", bangla: "সবকিছু পরিচালনা করা", english: "The Powerful" },
        { name: "Al-Muqaddim", arabic: "المُقَدِّم", bangla: "পূর্ববর্তী", english: "The Expediter" },
        { name: "Al-Mu’akhkhir", arabic: "المُؤَخِّر", bangla: "পিছিয়ে দেওয়া", english: "The Delayer" },
        { name: "Al-Awwal", arabic: "الأوَّل", bangla: "প্রথম", english: "The First" },
        { name: "Al-Akhir", arabic: "الآخِر", bangla: "শেষ", english: "The Last" },
        { name: "Az-Zahir", arabic: "الظَّاهِر", bangla: "প্রকাশ্য", english: "The Manifest" },
        { name: "Al-Batin", arabic: "البَاطِن", bangla: "গোপন", english: "The Hidden" },
        { name: "Al-Wali", arabic: "الْوَلِي", bangla: "ঘনিষ্ঠ", english: "The Sole Guardian" },
        { name: "Al-Muta’ali", arabic: "المتَعَالي", bangla: "উচ্চতর", english: "The Self Exalted" },
        { name: "Al-Barr", arabic: "الْبَرُّ", bangla: "সৎ", english: "The Source of All Goodness" },
        { name: "At-Tawwab", arabic: "التَّوَاب", bangla: "প্রত্যাবর্তনকারী", english: "The Ever-Pardoning" },
        { name: "Al-Muntaqim", arabic: "الْمُنْتَقِم", bangla: "প্রতিশোধ গ্রহণকারী", english: "The Avenger" },
        { name: "Al-`Afuww", arabic: "العَفُو", bangla: "ক্ষমাশীল", english: "The Pardoner" },
        { name: "Ar-Ra’uf", arabic: "الرَّؤُوف", bangla: "দয়ালু", english: "The Most Kind" },
        { name: "Malik al-Mulk", arabic: "مَالِكُ ٱلْمُلْك", bangla: "রাজ্যের মালিক", english: "Master of the Kingdom" },
        { name: "Dhul-Jalali Wal-Ikram", arabic: "ذُو ٱلْجَلَالِ وَٱلْإكْرَام", bangla: "মহিমা এবং সম্মানের অধিকারী", english: "Lord of Glory and Honour" },
        { name: "Al-Muqsit", arabic: "ٱلْمُقْسِط", bangla: "ন্যায়পরায়ণ", english: "The Just One" },
        { name: "Al-Jami’", arabic: "ٱلْجَامِع", bangla: "একত্রকারী", english: "The Gatherer" },
        { name: "Al-Ghani", arabic: "ٱلْغَنِي", bangla: "স্বয়ংসম্পূর্ণ", english: "The Self-Sufficient" },
        { name: "Al-Mughni", arabic: "ٱلْمُغْنِي", bangla: "ধনবান", english: "The Enricher" },
        { name: "Al-Mani’", arabic: "ٱلْمَانِع", bangla: "নিষেধকারী", english: "The Withholder" },
        { name: "Ad-Darr", arabic: "ٱلدَّار", bangla: "কষ্টদায়ক", english: "The Distresser" },
        { name: "An-Nafi’", arabic: "ٱلنَّافِع", bangla: "কল্যাণকারী", english: "The Propitious" },
        { name: "An-Nur", arabic: "النُّور", bangla: "আলো", english: "The Light" },
        { name: "Al-Hadi", arabic: "ٱلْهَادِي", bangla: "পথপ্রদর্শক", english: "The Guide" },
        { name: "Al-Badi", arabic: "ٱلْبَادِع", bangla: "আরম্ভকারী", english: "The Incomparable Originator" },
        { name: "Al-Baqi", arabic: "ٱلْبَاقِي", bangla: "চিরন্তন", english: "The Ever-Lasting" },
        { name: "Al-Warith", arabic: "ٱلْوَارِث", bangla: "অধিকারী", english: "The Inheritor" },
        { name: "Ar-Rashid", arabic: "الرَّشِيد", bangla: "পথপ্রদর্শক", english: "The Guide to the Right Path" },
        { name: "As-Sabur", arabic: "الصَّبُور", bangla: "ধৈর্যশীল", english: "The Patient" }
      ];
      
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isFlipping, setIsFlipping] = useState(false);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIsFlipping(true);
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % namesOfAllah.length);
            setIsFlipping(false);
          }, 500); // Matches the duration of the flip animation
        }, 10000);
    
        return () => clearInterval(interval);
      }, []);
    
      const { name, arabic, bangla, english } = namesOfAllah[currentIndex];
    
      return (
        <div className="card-container">
          <div className={`card ${isFlipping ? 'flip' : ''}`}>
            <div className="front bg-warning">
              <h2 className='w-100'>{arabic}</h2>

              <p>{name}</p>
              <p>{english}</p>
              <p>({bangla})</p>
            </div>
            <div className="back bg-secondary">
            <h2 className='w-100'>{arabic}</h2>
              <p>{name}</p>
              <p>{english}</p>
              <p>({bangla})</p>
            </div>
          </div>
        </div>
      );
    };

export default Names