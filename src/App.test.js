// настройка unit-теста
// метод shallow позволяет рендерить определенные компоненты
import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Character from "./Character";

configure({
  adapter: new Adapter()
})

// 1 параметр describe - компонент, кот. тестируем
// в блоке it прописывается функциональность, кот. хотим протестировать
describe('<App />', () => {

  // в переменную wrapper положим результат рендера компонента
  let wrapper

  // beforeEach будет выполняться перед каждой функцией it
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  // 1 параметры блока it описание того, что тестируем
  it('Should render 3 characters in light side', () => {

    // что ожидаем от компонента
    // toHaveLength проверка количества элементов, ожидаем 3 элемента
    expect(wrapper.find(Character)).toHaveLength(3)

  })

  it('Should render 2 characters in dark side', () => {
    // setProps позволяет добавить параметры для wrapper
    wrapper.setProps({
      side: 'dark'
    })
    expect(wrapper.find(Character)).toHaveLength(2)

  })
})