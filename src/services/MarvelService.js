
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=d7edc0208989506f2e6174e1c543d0c0';
    
    getResourse = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        
        }
        return await res.json();
    }
    getAllCharacters = () => {
        return this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    getCharacter = (id) => {
        return this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}
 export default MarvelService;

 //  Давайте разберем этот код по строкам:
//     class MarvelService {: Это объявление класса MarvelService. Классы в JavaScript используются для создания объектов с общими свойствами и методами.
//     getResourse = async(url) => {: Это определение метода getResourse класса MarvelService. Он использует синтаксис стрелочной функции и асинхронную функцию (async). Этот метод принимает url в качестве параметра.
//     let res = await fetch(url);: Эта строка выполняет асинхронный запрос к указанному URL с помощью функции fetch. Она ждет, пока запрос не завершится, и сохраняет результат в переменную res.
//     if (!res.ok) { throw new Error(Could not fetch ${url}, status: ${res.status}); }: Эта строка проверяет, успешно ли выполнен запрос (res.ok равно true). Если запрос не успешен (например, из-за ошибки сервера), генерируется исключение (throw new Error(...)), содержащее информацию о URL и статусе ответа.
//     return await res.json();: Эта строка извлекает данные из ответа в формате JSON и возвращает их. Оператор await используется для ожидания завершения операции чтения потока ввода (res.json()).
//     getAllCharacters = () => { return this.getResourse('https://gateway.marvel.com:443/v1/public/characters?apikey=d7edc0208989506f2e6174e1c543d0c0'); }: Это определение метода getAllCharacters класса MarvelService. Он использует синтаксис стрелочной функции. Этот метод вызывает метод getResourse, передавая ему URL, содержащий информацию о персонажах Marvel, и возвращает результат.
//     export default MarvelService;: Эта строка экспортирует класс MarvelService из этого файла для использования в других модулях. Ключевое слово default означает, что класс MarvelService является основным экспортом этого модуля.