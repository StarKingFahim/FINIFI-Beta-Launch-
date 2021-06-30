import * as React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,  
  Alert,
  ScrollView,
} from 'react-native';
import db from "../Config";

export default class DoctorScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        emailid: '',
        password: '',
        doctor:"",
        expertise:"",
        present:"",
        name:"",
        emails:"",
        number:0,
      };
    }
    
    addDoctor = ()=>{
      db.collection("Doctor_Details").doc.add({
        name:this.state.name,
        emails:this.state.emails,
        number:this.state.number,
        expertise:this.state.expertise,
        present:this.state.present,
      });
      return(Alert.alert("Thank You For Signing Up"));
  }

    render() {
        return (
                <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
                
                <Image
          source={require('../assets/FINIFI.jpg')}
          style={{width: 350, height: 150,marginTop: 40,marginLeft:30 }}
        />

        <ScrollView>
        <Text style={styles.allText}>Are You a Doctor ?</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
             
              backgroundColor:"#eeeeee",
            }}
            placeholder="Yes/No"
            value={this.state.doctor}
            onChangeText={(doctor) => this.setState({ doctor })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.allText}>Your Name</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
             
              backgroundColor:"#eeeeee",
            }}
            placeholder="Dr XYZ"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.allText}>Email</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              
              backgroundColor:"#eeeeee",
            }}
            placeholder="XYZ@gmail.com"
            value={this.state.name}
            onChangeText={(name) => this.setState({ emails })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.allText}>Number</Text> 

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
          
              backgroundColor:"#eeeeee",
            }}
            placeholder="+91 12345 67890"
            value={this.state.name}
            onChangeText={(name) => this.setState({ number })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.allText}>Your Expertise ?</Text>

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              
              backgroundColor:"#eeeeee",
            }}
            placeholder="expertise"
            value={this.state.expertise}
            onChangeText={(expertise) => this.setState({ expertise })}
            multiline
          />
        </TouchableOpacity>

        <Text style={styles.allText}>Are You at present working in a Hospital for the Effected ?</Text>

        <TouchableOpacity>
        <TextInput
            style={{
              padding: 10,
              width: 280,
              
              backgroundColor:"#eeeeee",
            }}
            placeholder=""
            value={this.state.present}
            onChangeText={(present) => this.setState({ present })}
            multiline
          />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{
        this.addDoctor();
        this.setState({
          doctor:"",
          name:"",
          emails:"",
          number:"",
          expertise:"",
          present:"",
      })
      }}>
        <Text style={styles.submitButton}>Submit</Text>
        
        </TouchableOpacity>

        </ScrollView>

        </KeyboardAvoidingView>
            
        );
    }
}   

    const styles = StyleSheet.create({
        allText: {
          backgroundColor: '#989898',
          flex: 1,
          fontSize:20,
          marginLeft:20,
        },
        header: {
          backgroundColor: '#ffffff',
        },
        quesText: {
          width: 280,
          height: 20,
          padding: 20,
          color: 'white',
          fontSize: 20,
          backgroundColor:"black",
          marginLeft: 20,
          marginTop: 10,
          
        },
        submitButton: {
          backgroundColor: '#8a9bcd',
          width: '50%',
          height: 40,
          marginTop: 10,
          padding: 5,
          marginLeft: 80,
        },
        buttonText: {
          textAlign: 'center',
          fontSize: 25,
        },
      });
      

