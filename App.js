import React from 'react';
import { StyleSheet, ScrollView,fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View}  from 'react-native';
import ViewMoreText from 'react-native-read-more-text';


export class SocialHeader extends React.Component {
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


export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <SocialHeader
          fullName={'Lorem Ipsum'}
          userName={'@Lorem90'}
          userNameColor={'tomato'}
          profilePicture={'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=334247d4893b40898bd1f74282aaada9&auto=format&fit=crop&w=750&q=80'}
          coverPicture={'https://mahasiswigoblog.files.wordpress.com/2016/06/jj.jpg?w=282&h=283'}
          bioText={"The bio is coupled with some other descriptive items that can help people better understand who you are, what you like, where you are from, when you started using Twitter, what your business sells and more. All of this is separated from the actual tweets on your page."}
        />
      </View>
    )
  }
}