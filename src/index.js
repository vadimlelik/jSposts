import {HeaderComponents} from "./components/header.components";
import {NavigationComponents} from "./components/navigation.components";
import {PostsComponents} from "./components/posts.components";
import {CreateComponents} from "./components/create.components";
import {FavoriteComponents} from "./components/favorite.components";


new HeaderComponents('header')
const navigation = new NavigationComponents('navigation')

const posts = new PostsComponents('posts')
const create =  new CreateComponents('create')
const favorite = new FavoriteComponents('favorite')



navigation.registerTabs([
    {name:'create',component:create},
    {name:'favorite',component:favorite},
    {name: 'posts',component:posts}
])