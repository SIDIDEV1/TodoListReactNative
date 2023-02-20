import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, Alert, TouchableOpacity, Modal } from 'react-native';
import AddItem from './crud/AddItem';
import List from './crud/List';


export default function App() {
  const [data, setData] = useState([])
  const [editText, setEditText] = useState({})
  const [showModal, setShowModal] = useState(false)


  const submitItem = (text) => {
    if (text === '') {
      Alert.alert('Oupss', 'Ce champ ne doit pas être vide !')
    } else {
      setData(prevData => [
        ...prevData,
        {
          name: text,
          id: data.length === 0 ? 1 : data[data.length - 1].id + 1
        }
      ])
    }
  }

  const deleteItem = (id) => {
    setData(prevData => {
      return prevData.filter(data => data.id !== id)
    })
  }

  const editItem = (item) => {
    setEditText(item)
    setShowModal(true)
  }

  const sumbitEdit = (e) => {
    if (e.name === '') {
      Alert.alert(`Oupss`, 'Ce champ ne doit pas être vide !')
    }
    else {
      setData(prevData => {
        return prevData.map(item => {
          if (item.id === e.id) {
            return {
              ...item,
              name: e.name
            }
          }
          return item
        })
      })
      setShowModal(false)
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200 relative">
      <View className="flex-1 p-6">

        <AddItem
          submitItem={submitItem}
        />

        <List
          data={data}
          editItem={editItem}
          deleteItem={deleteItem}
          isOpen={showModal}
          setIsOpen={setShowModal}
          sumbitEdit={sumbitEdit}
          editText={editText}
        />
      </View>
    </SafeAreaView>
  );
}
