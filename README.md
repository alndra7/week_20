# week_20

### Вопросы 💎

1. Какие 2 обязательных шага нужно сделать до начала обращения к методам модулей?

  установить Node.js
  создать package.json

2. Как узнать, установлен ли у тебя менеджер пакетов **npm**?

  в консоли ввести npm -v

3. Зачем нужен блок `finally`? 

  выполнение кода в независимоcти от наличия или отсутствия ошибок в блоке try

4. Есть следующий код:
    
    ```jsx
    let user = undefined;
    console.log(`Привет, ${user.name}`);
    ```
    
    Как сделать так, чтобы при обращении к нему выводилось внятное сообщение об ошибке «Имя пользователя не заполнено»?

      try {
        let user = undefined;
        console.log(`Привет, ${user.name}`);
      }
      catch {
        console.log(`Имя пользователя не заполнено`);
      }
    
5. Как сгенерировать собственную ошибку, например, в случае некорректного формата данных?

 с помощью оператора throw

6. Какую команду надо ввести, чтобы сгенерировался файл `package.json`?

  npm init # в папке с проектом

7. Приведите пример захвата ошибки в случае некорректного преобразования данных:
    
    ```jsx
    console.log(parseInt('ыыыы'));
    ```

        try {
      let test = parseInt('ыыыы')
      if (test!==test) {
        throw new Error("Ошибка");
      }
      console.log(test);
    }
    catch(error) {
      console.log(error.message );
    }
    
8. Изучите документацию к библиотеке moment [https://momentjs.com/](https://momentjs.com/) и скажите, как вывести название дня недели по дате?

  moment().format('dddd');

