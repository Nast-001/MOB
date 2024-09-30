import { StyleSheet, SafeAreaView, Platform, ScrollView} from 'react-native';
import UniversityCard from './components/UniversityCard';

export default function App() {

  const SemenData = {
    name: "Бол. Семеновская",
    image: require("./assets/XXL.webp"),
    type: "Great",
    hp: "7/10",
    moves: ['Центральный корпус', 'сделан ремонт', 'приятный'],
    metro: ['Электрозаводская']
  };

  const avtoData = {
    name: "На Автозаводской",
    image: require("./assets/XXL_height.webp"),
    type: "Horror",
    hp: "2/10",
    moves: ['Рядом Ривьера', 'все старое', 'свет и лифты не работают'],
    metro: ["Автозаводская"],
  };

  const pryanikData = {
    name: "Пряники",
    image: require("./assets/2.webp"),
    type: "Cool",
    hp: "5/10",
    moves: ["Далеко от метро", "Можно находиться", "Нормальное кафе"],
    metro: ["Коптево"]
  };

  const pavelData = {
    name: "Павла-Корчагина",
    image: require("./assets/orig.jpeg"),
    type: "Stress",
    hp: "4/10",
    moves: ["Далеко от метро", "Убитые аудитории", "Невозможно ориентироваться"],
    metro: ["ВДНХ"]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <UniversityCard {...SemenData}/>
        <UniversityCard {...pryanikData}/>
        <UniversityCard {...pavelData}/>
        <UniversityCard {...avtoData}/> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
