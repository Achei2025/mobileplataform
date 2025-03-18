### Documentação do Projeto: Plataforma "Achei" (Mobile) 📱🔍

## 1. Introdução 🚀

A Plataforma "Achei" é uma solução tecnológica inovadora que visa facilitar a interação e comunicação entre cidadãos e policiais. Seu objetivo principal é promover maior eficiência na resolução de ocorrências, localização de objetos furtados e fortalecimento da segurança pública. Esta documentação fornece uma visão geral do projeto, incluindo sua arquitetura, funcionalidades, stack tecnológica e orientações para desenvolvimento, execução e manutenção.

## 2. Objetivo do Projeto 🎯

### 2.1. Objetivo Técnico 💻

Desenvolver uma plataforma integrada que permita:

- **Gerenciamento de ocorrências** 📋: Acompanhamento de ocorrências por cidadãos e policiais.
- **Geolocalização em tempo real** 🗺️: Auxílio na resolução de casos com base na localização dos usuários.
- **Comunicação direta e segura** 🔒: Interação entre cidadãos e policiais de forma eficiente e protegida.
- **Denúncias anônimas** 🕵️: Possibilidade de realizar denúncias sem expor a identidade do denunciante.
- **Armazenamento e análise de dados** 📊: Coleta e processamento de dados para melhorias contínuas no sistema.


### 2.2. Objetivo de Negócio 💼

- **Melhorar a eficiência** ⚡: Agilizar a resolução de ocorrências e localização de objetos.
- **Fortalecer a confiança** 🤝: Promover uma relação mais próxima e transparente entre cidadãos e policiais.
- **Oferecer uma ferramenta moderna** 📲: Disponibilizar uma plataforma acessível e de fácil uso para segurança pública.


## 3. Stack Tecnológica 🛠️

A Plataforma "Achei" utiliza as seguintes tecnologias:

### Backend ⚙️

- **Linguagem**: Java ☕.


### Frontend 🖥️

- **Web**: React.js para a interface web ⚛️.
- **Mobile**: React Native para o aplicativo móvel (iOS e Android) 📱.


### Banco de Dados 💾

- **MySQL**: Para armazenamento de dados estruturados 🗄️.


### Ferramentas Auxiliares 🧰

#### Framework Mobile 📱

- **React Native**: Framework principal para desenvolvimento mobile cross-platform.
- **TypeScript**: Linguagem de programação tipada utilizada em todos os arquivos.


#### Desenvolvimento Mobile 📲

- **Expo**: Plataforma para facilitar o desenvolvimento React Native, com uso de:

- `expo-router` para navegação 🧭.
- `expo-image-picker` para seleção de imagens 🖼️.
- Hooks de navegação como `useRouter` e `usePathname`.





#### Gerenciamento de Estado 🔄

- **React Hooks**: `useState`, `useEffect`, `useRef` para gerenciamento de estado local.
- **Context API**: Para gerenciamento de estado global, especialmente para o tema (dark/light mode) 🌓.


#### Mapas e Geolocalização 🗺️

- **React Maps**: Biblioteca para integração de mapas interativos.

- Suporte para marcadores, polígonos e outras formas geográficas.
- Funcionalidades de mapa de calor para visualização de densidade de ocorrências 🔥.





#### Bibliotecas de UI 🎨

- **React Native Paper**: Componentes UI para React Native:

- `Button`, `RadioButton` e outros componentes.



- **React Native StyleSheet**: Para estilização dos componentes.


#### Bibliotecas de Ícones 🎭

- **Feather Icons**: Conjunto principal de ícones.
- **Material Icons**: Ícones adicionais para a interface.


## 4. Exemplos de Código das Bibliotecas Utilizadas 📝

### React Native e TypeScript

```tsx
// Exemplo de componente React Native com TypeScript
import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

interface Props {
  title: string
}

const ExampleComponent = ({ title }: Props) => {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  counter: {
    fontSize: 48,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#28A745",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default ExampleComponent
```

### Expo Router para Navegação 🧭

```tsx
// Exemplo de uso do Expo Router
import { useRouter, usePathname } from "expo-router"
import { View, TouchableOpacity, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

const NavigationExample = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {[
        { icon: "home", path: "/homescreen", label: "Início" },
        { icon: "package", path: "/meusbos", label: "Meus BOs" },
        { icon: "user", path: "/perfil", label: "Perfil" },
        { icon: "map", path: "/maps", label: "Mapa" },
        { icon: "settings", path: "/config", label: "Config" },
      ].map((item, index) => (
        <TouchableOpacity key={index} onPress={() => router.push(item.path as any)}>
          <Feather
            name={item.icon as any}
            size={24}
            color={pathname === item.path ? "#28A745" : "#666"}
          />
          <Text style={{ color: pathname === item.path ? "#28A745" : "#666" }}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default NavigationExample
```

### Context API para Tema (Dark/Light Mode) 🌓

```tsx
// theme-context.tsx - Exemplo de Context API para gerenciamento de tema
import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { useColorScheme } from "react-native"

type ThemeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if device is in dark mode
  const deviceTheme = useColorScheme()
  const [darkMode, setDarkMode] = useState(deviceTheme === "dark")

  // Update theme if device theme changes
  useEffect(() => {
    setDarkMode(deviceTheme === "dark")
  }, [deviceTheme])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

// Theme colors
export const lightTheme = {
  background: "#f5f7fa",
  card: "#ffffff",
  text: "#333333",
  textSecondary: "#666666",
  primary: "#28A745", // Green
  secondary: "#009B3A",
  accent: "#FFDF00",
  border: "#e0e0e0",
}

export const darkTheme = {
  background: "#121212",
  card: "#1E1E1E",
  text: "#ffffff",
  textSecondary: "#aaaaaa",
  primary: "#28A745", // Green
  secondary: "#34A853",
  accent: "#FBBC05",
  border: "#333333",
}
```

### React Maps para Mapas 🗺️

```tsx
// Exemplo de implementação de mapa com React Maps
import React, { useState, useEffect, useRef } from "react"
import { View, StyleSheet } from "react-native"
import MapView, { Marker, Heatmap, PROVIDER_GOOGLE } from "react-native-maps"
import { useTheme, lightTheme, darkTheme } from "./theme-context"

// Interface para o marcador
interface OcorrenciaMarker {
  id: number
  coordinate: {
    latitude: number
    longitude: number
  }
  title: string
  description: string
  weight?: number
}

const MapScreen = () => {
  const { darkMode } = useTheme()
  const theme = darkMode ? darkTheme : lightTheme
  const mapRef = useRef<MapView>(null)
  
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  
  const [markers, setMarkers] = useState<OcorrenciaMarker[]>([
    {
      id: 1,
      coordinate: { latitude: -23.55052, longitude: -46.633308 },
      title: "Furto",
      description: "Furto de celular na Av. Paulista",
      weight: 0.8,
    },
    {
      id: 2,
      coordinate: { latitude: -23.55352, longitude: -46.636308 },
      title: "Roubo",
      description: "Roubo de veículo na Rua Augusta",
      weight: 0.6,
    },
    {
      id: 3,
      coordinate: { latitude: -23.54852, longitude: -46.631308 },
      title: "Furto",
      description: "Furto de bolsa na Praça da República",
      weight: 0.7,
    },
  ])
  
  const [showHeatmap, setShowHeatmap] = useState(true)
  const [selectedMarker, setSelectedMarker] = useState<OcorrenciaMarker | null>(null)

  // Estilo do mapa para modo escuro
  const mapStyle = darkMode ? [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#242f3e" }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#746855" }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#242f3e" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#38414e" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#212a37" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#17263c" }]
    }
  ] : []

  // Função para adicionar um novo marcador
  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent
    
    const newMarker: OcorrenciaMarker = {
      id: Date.now(),
      coordinate,
      title: "Nova Ocorrência",
      description: "Ocorrência registrada pelo usuário",
      weight: 0.5,
    }
    
    setMarkers([...markers, newMarker])
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={setRegion}
        onPress={handleMapPress}
        customMapStyle={mapStyle}
      >
        {/* Marcadores */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => setSelectedMarker(marker)}
            pinColor={marker.id === selectedMarker?.id ? "red" : "#28A745"}
          />
        ))}
        
        {/* Mapa de calor */}
        {showHeatmap && (
          <Heatmap
            points={markers.map((marker) => ({
              ...marker.coordinate,
              weight: marker.weight || 0.5,
            }))}
            radius={20}
            opacity={0.7}
            gradient={{
              colors: ["#00FF00", "#FFFF00", "#FF0000"],
              startPoints: [0.2, 0.5, 0.8],
              colorMapSize: 256,
            }}
          />
        )}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
})

export default MapScreen
```

### Expo Image Picker 📸

```tsx
// Exemplo de uso do Expo Image Picker
import { useState } from "react"
import { View, Button, Image, StyleSheet } from "react-native"
import * as ImagePicker from "expo-image-picker"

const ImagePickerExample = () => {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Selecionar Imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
})

export default ImagePickerExample
```

### React Native Paper 📑

```tsx
// Exemplo de uso do React Native Paper
import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Button, RadioButton, Text, TextInput } from "react-native-paper"

const PaperComponentsExample = () => {
  const [value, setValue] = useState("first")
  const [text, setText] = useState("")

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">React Native Paper</Text>
      
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.input}
      />
      
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <View style={styles.radioOption}>
          <RadioButton value="first" />
          <Text>Primeira opção</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioButton value="second" />
          <Text>Segunda opção</Text>
        </View>
      </RadioButton.Group>
      
      <Button mode="contained" onPress={() => console.log("Pressed")} style={styles.button}>
        Confirmar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    marginVertical: 10,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  button: {
    marginTop: 20,
  },
})

export default PaperComponentsExample
```

## 5. Acesso e Execução do Código 🔑

### 5.1. Repositórios do Projeto 📁

- **Frontend Web**: Achei2025/PlataformaWeb.
- **Backend**: Achei2025/BackendAchei.


### 5.2. Configuração do Ambiente ⚙️

#### Pré-requisitos 📋

- **Node.js**: Versão 16 ou superior.
- **Expo CLI**: Para desenvolvimento mobile.
- **Java**: JDK 11 ou superior.
- **MySQL**: Banco de dados configurado.


#### Instalação e Execução 🚀

1. Clone os repositórios:


```shellscript
git clone https://github.com/Achei2025/PlataformaWeb.git
git clone https://github.com/Achei2025/BackendAchei.git
git clone https://github.com/Achei2025/mobileplataform.git
```

2. Instale as dependências:


```shellscript
# No diretório do frontend
npm install

# No diretório do backend
mvn install
```

3. Configure as variáveis de ambiente:

1. Crie um arquivo `.env` em cada projeto com as configurações necessárias (ex: credenciais do banco de dados, chaves de API).



4. Execute o projeto:


```shellscript
# Frontend Web
npm start

# Backend
mvn spring-boot:run

# Mobile (com Expo)
npx expo start
```

## 6. Estrutura do Projeto Mobile 📱

### 6.1. Principais Componentes 🧩

- **theme-context.tsx**: Gerenciamento de tema (claro/escuro) usando Context API.
- **homescreen.tsx**: Tela inicial do aplicativo.
- **maps.tsx**: Implementação de mapas com React Maps.
- **meusbos.tsx**: Gerenciamento de boletins de ocorrência.
- **perfil.tsx**: Perfil do usuário e objetos cadastrados.
- **cadastroequipamento.tsx**: Cadastro de novos equipamentos.
- **config.tsx**: Configurações do aplicativo.
- **relatoriopolicial.tsx**: Relatórios e estatísticas para policiais.
- **dashboardpolicial.tsx**: Dashboard para visualização de dados policiais.


### 6.2. Funcionalidades Implementadas ✨

- **Sistema de Tema** 🌓: Suporte completo para modo claro e escuro.
- **Navegação** 🧭: Sistema de rotas com Expo Router.
- **Mapas Interativos** 🗺️: Visualização de ocorrências em mapa com suporte a mapa de calor.
- **Cadastro de Objetos** 📝: Interface para registro de equipamentos.
- **Gestão de Boletins** 📋: Criação e acompanhamento de boletins de ocorrência.
- **Relatórios** 📊: Visualização de estatísticas e dados.


## 7. Processo de Desenvolvimento 🔄

### 7.1. Gerenciamento de Código 📊

- **GitHub** 🐙: Utilizado para versionamento e gerenciamento de branches.


### 7.2. Padrões de Código 📏

- **TypeScript** 📘: Uso de tipagem estática para maior segurança.
- **Componentes Funcionais** ⚛️: Utilização de React Hooks e componentes funcionais.
- **Estilização Consistente** 🎨: Padrões de estilo mantidos em todo o projeto.


## 8. Boas Práticas 👍

### 8.1. Documentação 📚

- **Minimundo** 📝: Documentar o escopo e as alterações antes de iniciar o desenvolvimento.
- **Revisão Constante** 🔍: Manter a documentação atualizada conforme o projeto evolui.
- **Colaboração** 🤝: Todos os membros da equipe podem editar e melhorar a documentação.


### 8.2. Reuniões e Comunicação 💬

- **Reuniões Constantes** 👥: Realizar reuniões regulares para alinhamento de ideias e atualizações sobre o projeto.
- **Ferramentas de Comunicação** 🗣️: Utilizar ferramenta gather para comunicação ágil.


## 9. Links Úteis 🔗

- [Repositório Frontend Web](https://github.com/Achei2025/PlataformaWeb) 🌐
- [Repositório Backend](https://github.com/Achei2025/BackendAchei) ⚙️
- [Documentação Expo](https://docs.expo.dev/) 📱
- [Documentação React Native](https://reactnative.dev/docs/getting-started) 📚
- [Documentação React Native Maps](https://github.com/react-native-maps/react-native-maps) 🗺️


## 10. Contribuição 🤝

Para contribuir com o projeto:

1. Faça um fork do repositório 🍴
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`) 🌿
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`) ✅
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`) 📤
5. Abra um Pull Request 📥


## 11. Licença 📄

Este projeto está licenciado sob os termos da licença GPL. ⚖️
