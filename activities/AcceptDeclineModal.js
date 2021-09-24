import * as React from 'react';
import { View,TouchableOpacity} from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const AcceptDeclineModal = () => {
  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
        <Modal visible={visible} onDismiss={hideModal} style={{zIndex:1}}>
          <View style={{backgroundColor:'white',marginLeft:20,marginRight:20,zIndex:1,padding:'3%',paddingRight:'5%',borderColor:'#9DC44D',borderWidth:1}}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Do you want to Accept the order?</Text>
            <Text style={{color:'#757575',marginTop:'2%',paddingRight:'15%'}}>Once the action is performed on the order it cannot be changed. So please confirm.</Text>
            <View style={{marginLeft:'auto',flexDirection:'row',marginTop:'5%',width:'100%'}}>
              <TouchableOpacity style={{marginLeft:'auto'}}>
                  <Text style={{fontWeight:'bold'}}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:30}}>
                  <Text style={{fontWeight:'bold'}}>NO</Text>
              </TouchableOpacity>
          </View>
          </View>
        </Modal>
  );
};

export default AcceptDeclineModal;