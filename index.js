import React from "react";
import { View, Modal, StyleSheet,Platform ,Animated,Image,Easing} from "react-native";


const Loader = (props) => {
    this.RotateValueHolder = new Animated.Value(0);
    const RotateData = this.RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

      this.StartImageRotateFunction();
    

return props.show ? <View style={styles.MainContainer}>
        <Modal
            transparent={true}
            animationType={"fade"}
            onRequestClose={
                () => {
 
                }
            }>
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                <View style={styles.Loader_Main_view}>
                <Animated.Image
               style={{
              width: 60,
              height: 60,
              transform: [{rotate: RotateData}] }}
              source={require('./images/loader.png')} />
                </View>
            </View>
        </Modal>
    </View> : null ;
}


StartImageRotateFunction =() =>{

    this.RotateValueHolder.setValue(0)
    
    Animated.timing(
      this.RotateValueHolder,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.StartImageRotateFunction())
  
  }

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
        position: 'absolute',
        top:0,
        bottom:0,
        left: 0,
        right: 0,
        zIndex: 999
    },

    Loader_Main_view: {
        padding: 10,
        height: 90,
        width: 90,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
    },
});
export default Loader;