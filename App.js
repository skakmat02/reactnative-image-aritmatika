/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  AppRegistry,
  Button,
  Alert,
  TextInput
} from 'react-native';

export default class App extends Component <{}>{

onPressButton(){
  Alert.alert(
    'Hei',
    'Apa Kabar ?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
}

alerthasil() {
  
  Alert.alert(
    'Hasil = '+this.state.hitung,
    
  );
}

constructor(props) {
  super(props);

  this.state = {
    satu: '',
    dua: '',
    hitung: 0
  };
}

tambah = () => {
  const { satu, dua } = this.state;
  
  this.setState({
    hitung: Number(satu) + Number(dua)
    
  });
  if(this.state.hitung>0){
  this.alerthasil();
 }
}

bagi = () => {
  const { satu, dua } = this.state;

  this.setState({
    hitung: Number(satu) / Number(dua)
  });
}

kali = () => {
  const { satu, dua } = this.state;

  this.setState({
    hitung: Number(satu) * Number(dua)
  });
}

kurang = () => {
  const { satu, dua } = this.state;

  this.setState({
    hitung: Number(satu) - Number(dua)
  });
}

  render() {
    
    let imagePath= {uri:'https://www.upnjatim.ac.id/wp-content/uploads/2018/05/logoupnbaru.png'};
    
    return(
      
      <View style={styles.container}>
<Text style={styles.sectionTitle}>SELAMAT DATANG !</Text>
<Image source={imagePath} style={{width:150, height:150}} />

<Button onPress={this.onPressButton} title="Klik Saya"  />

<Button disabled onPress={this.onPressButton} title="Terdisabled"  />

<View style={styles.container2}><TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={(satu) => this.setState({satu})} value={this.state.satu} /><Text style={styles.sectionTitle2}></Text><Button onPress={this.tambah} title="+"  /><Button onPress={this.kurang} title="-"  /><Button onPress={this.bagi} title=":"  /><Button onPress={this.kali} title="x"  /><Text style={styles.sectionTitle2}></Text><TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={(dua) => this.setState({dua})} value={this.state.dua} />
<Text style={styles.sectionTitle}>=</Text>
<TextInput onChangeText={(text) => this.setState({satu})} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={`${this.state.hitung}`}  /></View>


      </View>

    );
          }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: '600',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    
  },
  container2: {
    fontSize: 24,
    fontWeight: '600',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    flexWrap: 'wrap',
        flexDirection: 'row'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    margin:20,
  },
  sectionTitle2: {
    fontSize: 10,
    margin:5,
  },
  
  
});


