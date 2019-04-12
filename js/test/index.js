var app = new Vue({
    el:'#app',
    data:{
        message:'你好世界，这是一个新的Vue应用'
    }
})

var app2 = new Vue({
    el:'#app-2',
    data: {
        message:'这是动态绑定的一个悬停提示信息'
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true,
    },
    computed:{
            info : function () {
                return "你现在所看到的判断条件为:"+this.seen.toString();
            }
    }
})

var app4 = new Vue({
    el: '#app-4',
    data:{
        todos:[
            {text:'第一条'},
            {text:'第二条'},
            {text:'第三条'}
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'你好VueJS,这是一个实例程序'
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:"你好VueJS"
    }
})

var vm = new Vue({
    el:'#example',
    data:{
        message:'Hello'
    },
    computed: {
        reversedMessage:function () {
            //this指向vm实例
            return this.message.split('').reverse().join('')
        }
    }
})