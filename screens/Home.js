import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import {COLORS, FONTS, images} from '../constants';
import Logo from "./include/navbar";
import NavBar from "./include/navbar";
import NavBarLayout from "./include/navbar";


const Home = ({ navigation }) => {

  function renderBody() {
    return (
      <View style ={{paddingTop: 10}}>
        <View style = {styles.row}>
          <View style={styles.column}>
            <TouchableOpacity onPress={() => {alert('You clicked search button')}}>
              <ImageBackground style = {styles.backImg} source ={images.searchMedicine} >
                <Text style = {styles.text}> Search Medicine</Text>
              </ImageBackground>
              <View style = {{alignItems: "center", marginHorizontal: 2, marginVertical: 1}}>
                <Text style = {{...FONTS.h4, alignItems: "center", color: COLORS.lightGray}}>Click this shape to search for medicines</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity onPress={() => {alert('You clicked search button');}}>
              <ImageBackground style = {styles.backImg} source ={images.searchPharmacy}>
                <Text style = {styles.text}> Search Pharmacy </Text>
              </ImageBackground>
              <View style = {{alignItems: "center", marginHorizontal: 2, marginVertical: 1}}>
                <Text style = {{...FONTS.h4, alignItems: "center", color: COLORS.lightGray}}>Click this shape to search for medicines</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.row}>
          <View style={styles.column}>
            <TouchableOpacity onPress={() => {alert('You clicked search button');}}>
              <ImageBackground style = {styles.backImg} source ={images.searchPharmacy}>
                <Text style = {styles.text}> Create Post </Text>
              </ImageBackground>
              <View style = {{alignItems: "center", marginHorizontal: 2, marginVertical: 1}}>
                <Text style = {{...FONTS.h4, alignItems: "center", color: COLORS.lightGray}}>Click this shape to search for medicines</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity onPress={() => {alert('You clicked search button');}}>
              <ImageBackground style = {styles.backImg} source ={images.profileHome}>
                <Text style = {styles.text}> Profile  </Text>
              </ImageBackground>
              <View style = {{alignItems: "center", marginHorizontal: 2, marginVertical: 1}}>
                <Text style = {{...FONTS.h4, alignItems: "center", color: COLORS.lightGray}}>Click this shape to search for medicines</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    </View>
    )
  }
  return (
    <View style ={{backgroundColor: COLORS.secondary, flex: 1, padding: 0}}>
      <TouchableOpacity>
        <Image  resizeMode = "cover" source = {images.logoProject} />
      </TouchableOpacity>
      {renderBody()}
    </View>
  );
};

const styles = StyleSheet.create({

  row:{
    flexDirection:"row",
    paddingBottom: 20
  },
  column: {
    flex : 1,
    width: 100,
    height: 200,
    alignItems: "center",
    backgroundColor: COLORS.gray,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
  backImg: {
    flex: 1,
    position: 'relative',
    justifyContent: "center",
    resizeMode:"center",
  },
  text: {
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
    ...FONTS.h3,
    backgroundColor: "#000000c0"
  }

});
export default Home;

