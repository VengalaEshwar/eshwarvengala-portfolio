import './App.css'
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout'
import { db, doc, getDoc, setDoc, updateDoc } from './utils/firebase';
function App() {
    useEffect(() => {
    const checkAndUpdateVisit = async () => {
      const isVisited = localStorage.getItem('isVisited');

      if (!isVisited) {
        const visitRef = doc(db, 'analytics', 'visitCount');
        const snap = await getDoc(visitRef);

        if (snap.exists()) {
          await updateDoc(visitRef, {
            count: snap.data().count + 1
          });
        } else {
          await setDoc(visitRef, { count: 1 });
        }

        localStorage.setItem('isVisited', 'true');
      }
    };

    checkAndUpdateVisit();
  }, []);
  return (
    <MainLayout/>
  )
}

export default App
