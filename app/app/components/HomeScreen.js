import React, {Component} from 'react';
import { BackHandler, Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    logging: "false"
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.retrieveData()
  }

  async sair() {
    await AsyncStorage.setItem("email", "");
    await AsyncStorage.setItem("password", "");
    await AsyncStorage.setItem("logging", "false");

    BackHandler.exitApp();
    return true;
  };

  async retrieveData() {
    const value = await AsyncStorage.getItem('logging');
    const email = await AsyncStorage.getItem('email');

    console.debug(value);

    this.setState({
      logging: value
    })
  };

  render() {

    const navigation = this.props.navigation;

    const dataArray = [
      { title: "Quem pode ser doadora de leite humano?",
        content: "Algumas mulheres quando estão amamentando produzem um volume de leite além da necessidade do bebê, o que possibilita que sejam doadoras de um Banco de Leite Humano. De acordo com a legislação que regulamenta o funcionamento dos Bancos de Leite no Brasil (RDC Nº 171) a doadora, além de  apresentar excesso de leite, deve ser saudável, não usar medicamentos que impeçam a doação e se dispor a ordenhar e a doar o excedente." },
      { title: "Como doar?",
        content: "Se você quer doar seu leite entre em contato com um Banco de Leite Humano. Clique aqui e encontre o mais próximo de você." },
      { title: "Como preparar o frasco para coletar o leite humano?" ,
        content: "1. Escolha um frasco de vidro com tampa plástica, pode ser de café solúvel ou maionese; 2. Retire o rótulo e o papelão que fica sob a tampa e lave com água e sabão, enxaguando bem; 3. Em seguida coloque em uma panela o vidro e a tampa e cubra com água, deixando ferver por 15 minutos (conte o tempo a partir do início da fervura); 4. Escorra a água da panela e coloque o frasco e a tampa para secar de boca para baixo em um pano limpo; 5. Deixe escorrer a água do frasco e da tampa. Não enxugue; 6. Você  poderá usar quando estiver seco." },
      { title: "Como se preparar para retirar o leite humano (ordenhar)?",
        content: "Comece fazendo massagem suave e circular nas mamas. Massageie as mamas com as polpas dos dedos   começando na aréola (parte escura da mama) e, de forma circular,  abrangendo toda mama."},
      { title: "É ideal que o leite seja retirado de forma manual:",
        content: "1. Primeiro coloque os dedos polegar e indicador no local onde começa a aréola (parte escura da mama); 2. Firme os dedos e empurre para trás em direção ao corpo; 3. Comprima suavemente um dedo contra o outro, repetindo esse movimento várias vezes até o leite começar a sair; 4. Despreze os primeiros jatos ou gotas e inicie a coleta no frasco. Se você estiver com dificuldade de retirar seu leite, procure apoio no Banco de Leite Humano mais próximo de você. "},
      { title: "Como guardar o leite retirado para doação?",
        content: "O frasco com o leite retirado deve ser armazenado no congelador ou freezer. Na próxima vez que for retirar o leite, utilize outro recipiente esterilizado e ao terminar acrescente este leite no frasco que está no freezer ou congelador. O leite pode ficar armazenado congelado por até 15 dias. O leite humano doado, após passar por processo que envolve seleção, classificação e pasteurização, é distribuído com qualidade certificada aos bebês   internados em unidades neonatais."}
    ];

    return (
      <View>
<<<<<<< HEAD
        <Header
          statusBarProps={{ barStyle: 'light-content', backgroundColor: '#3D6DCC' }}
          barStyleP="light-content"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Patrino', style: { color: '#fff' } }}
          rightComponent={<View>
        <Avatar
          onPress={() => this.sair()}
          rounded
          source={require('../res/team-3-800x800.jpg')}
        />
        <Badge
          status="success"
          containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />
      </View>
    }
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
        />

        <ScrollView>
          <View style={{ marginTop: 10}}>
            <Tile
              onPress={() => this.props.navigation.navigate("DoarScreen") }
              imageSrc={require('../res/suhyeon-choi-251615-unsplash.jpg')}
              title="SEJA UMA DOADORA!"
              featured
              caption="Veja como é fácil ser uma doadora"
            />
=======
        <View style={header.background}>
          <View style={header.container}>
            <Text style={header.text}>Patrino</Text>
            <Icon 
              style={header.icon} 
              name="perm-identity" 
              onPress={() => this.props.navigation.navigate("Settings", {navigation})}/>
>>>>>>> upstream/master
          </View>
        </View>

        <View style={{marginBottom: 10}}></View>

        <View style={button.container}>
          <TouchableNativeFeedback>
            <View style={button.icon}>
              <Image style={button.img} source={require("../res/milk-bottle.png")} />
            </View>
          </TouchableNativeFeedback>
          <View style={button.textContainer}>
            <Text style={button.title}>Seja uma Doadora</Text>
            <Text style={button.text}>Veja como é fácil ser uma doadora!</Text>
          </View>
        </View>
        <View style={button.container}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("MyMap")}>
            <View style={button.icon}>
              <Image style={{width: 41, height: 55, }} source={require("../res/location.png")} />
            </View>
          </TouchableNativeFeedback>
          <View style={button.textContainer}>
            <Text style={button.title}>Saiba onde Doar</Text>
            <Text style={button.text}>Localize o banco de leite mais próximo!</Text>
          </View>
        </View>
        <View style={button.container}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("Questions", {navigation})}>
            <View style={button.icon}>
              <Image style={button.img} source={require("../res/question.png")} />
            </View>
          </TouchableNativeFeedback>
          <View style={button.textContainer}>
            <Text style={button.title}>Tire suas duvidas</Text>
            <Text style={button.text}>Encontre todas as respostas que precisa sobre doação!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const header = StyleSheet.create({
  background: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 54,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
  },
  container : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  	alignItems: 'center',
    marginLeft: 37,
    marginRight: 37,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  	alignItems: 'flex-start',
    fontSize: 20,
  	color: "#F59896",
    fontWeight: '600',
  },
  icon: {
    color: "#F59896",
    fontSize: 25,
  },
});

const button = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 37,
    marginRight: 37,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 100,
    height: 100,
    backgroundColor: "#F59896",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,    
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "normal",
  },
  text: {
    color: "#707070",
  },
});
