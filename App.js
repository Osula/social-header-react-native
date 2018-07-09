import React from 'react';
import { StyleSheet, ScrollView,fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View}  from 'react-native';
import ViewMoreText from 'react-native-read-more-text';


export default class SocialHeader extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      profilePicture: this.props.profilePicture,
      coverPicture:this.props.coverPicture,
      bioText:this.props.bioText,
      fullName:this.props.fullName,
      userName:this.props.userName,
      usernameTextColor: this.props.userNameColor
    };
  }
 
  render() {
      return (

  <View style={{flex:1, backgroundColor:'white'}}>
      <View> 
          <Image style={styles.headerContainer} source={{uri:this.state.profilePicture}}>
          </Image>
      </View>

      <View style={styles.userName}>
        <Image style={styles.profilepic} 
            source={{uri: this.state.coverPicture}}>
        </Image>
        <View style={{marginLeft:90, height:30}}>
            <Text style={styles.fullNameStye}>{this.state.fullName}</Text>
            <Text style={[styles.userNameStyle, 
            {
              color: this.state.usernameTextColor
            }
            ]}>{this.state.userName}</Text>
        </View>
      </View>

      <View style={styles.bigTextbox}>
          <ViewMoreText
              numberOfLines={3}
              onReady={this._handleTextReady}>
              <Text>
                  {this.state.bioText}</Text>
          </ViewMoreText>
      </View>
  </View>

      );
  }
}


const styles = StyleSheet.create({

screenContainer:{
  flex: 1, 
  },

headerContainer:{    
  height:100,
  marginTop:20,
  borderBottomWidth:1,
  borderColor:'white',
  },

profilepic:{
  width:90,
  height:90,
  position:'absolute',
  marginTop:-60,
  borderRadius:43,
  borderColor:'white',
  borderWidth:3,
},

  
bigTextbox:{
  padding:15,
  borderBottomWidth:1,
  borderColor:'#EAECEE',
  backgroundColor:'transparent',
},


userName:{
  backgroundColor:'transparent',
  height:30,
  marginLeft:10,
  padding:5,
},

fullNameStye:{
  fontSize:22,
  fontWeight:'bold',
  color:'black',
  marginTop:-30,
},
userNameStyle:{
  fontSize:18,
  fontWeight:'bold',
  color:'blue',
},

textStyle:{
  fontSize:15,
  fontWeight:'bold',
  color:'black',
},
});

