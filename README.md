fl-helper
=========
![ScreenShot](https://raw.github.com/AveVlad/fl-helper/master/github/offers.png)
![ScreenShot](https://raw.github.com/AveVlad/fl-helper/master/github/notification.png)


----------


##Возможности:

 - Уведомления о новых ответах в проектах и непрочитанных сообщениях
 - Готовые ответы в проекте
 - Сохранение текста предложения в Localstorage, если ответ не был дан (спасает от случайно закрытой страницы)
 - Сделать предложение видимым только для заказчика (галочка стоит сразу)

##Для разработчиков:

 1. Убедитесь в том, что вы установили <a href="http://nodejs.org/" target="_blank">Node.js</a>.
 2. Установите <a href="http://coffeescript.org/" target="_blank">CoffeeScript</a>, <a href="https://github.com/gulpjs/gulp" target="_blank">Gulp</a> и <a href="http://bower.io/" target="_blank">Bower</a>.

        npm install -g coffee-script
        npm install -g gulp
        npm install -g bower
        
 3. Клонируйте git репозиторий или [скачайте zip архив](https://github.com/AveVlad/fl-helper/archive/master.zip).

        git clone git@github.com:AveVlad/fl-helper.git

 4. Запустите **npm** для установки зависимостей.

        cd fl-helper
        npm install
        
 5. Усатновите зависимости Bower.

        bower install
        
 6. Запустите Gulp.

        gulp --require coffee-script/register