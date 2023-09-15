import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewCv from './ViewCv';
import EditCv from './EditCv';

const Stack = createStackNavigator();

export default function App() {
  const [cvData, setCVData] = useState({
    fullName: 'Israel Olaide',
    slackUsername: 'IsraelOla',
    githubHandle: 'Hisrael01',
    bio: "I'm a fullstack dev",
  });

  const handleSaveCV = (editedCVData) => {
    setCVData(editedCVData);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewCv">
        <Stack.Screen
          name="ViewCv"
          options={{ title: 'CV Viewer' }}
          initialParams={{ cvData }} 
          component={({ navigation }) => (
            <ViewCv
              cvData={cvData}
              onEdit={() => navigation.navigate('EditCv')}
            />
          )}
        />
        <Stack.Screen
          name="EditCv"
          options={{ title: 'Edit CV' }}
          initialParams={{ cvData }} 
          component={({ navigation }) => (
            <EditCv
              initialCVData={cvData}
              onSave={(editedData) => {
                navigation.goBack(); // Navigate back to CVView
              }}
              onCancel={() => navigation.goBack()}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ViewCv from './ViewCv';
// import EditCv from './EditCv';

// const Stack = createStackNavigator();

// const App = () => {
//   const initialCVData = {
//     fullName: 'Israel Olaide',
//     slackUsername: 'IsraelOla',
//     githubHandle: 'Hisrael01',
//     bio: "I'm a fullstack dev",
//   };

//   const [cvData, setCVData] = useState(initialCVData);

//   const handleSaveCV = (newCVData) => {
//     setCVData(newCVData);
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="ViewCv">
//         <Stack.Screen
//           name="ViewCv"
//           options={{ title: 'CV Viewer' }}
//           component={({ navigation }) => (
//             <ViewCv {...cvData} onEdit={() => navigation.navigate('EditCv')} />
//           )}
//         />
//         {/* <Stack.Screen
//           name="ViewCv"
//           options={{ title: 'CV Viewer' }}
//           component={() => <ViewCv {...cvData} />}
//         /> */}
//         <Stack.Screen
//           name="EditCv"
//           options={{ title: 'Edit CV' }}
//           component={() => <EditCv onSave={handleSaveCV} initialValues={cvData} />}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
