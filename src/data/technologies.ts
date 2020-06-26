import { Technology } from '@/classes/Technology';

enum Technologies {
    vuejs = 'VueJs',
    vuerouter = 'VueJsRouter',
    vuex = 'Vuex',
    vuetify = 'Vuetify',
    '3dgraphics' = 'Grafika 3D',
    'c++' = 'C++',
    typescript = 'TypeScript',
    threejs = 'ThreeJs',
    javascript = 'JavaScript',
    csharp = 'csharp',
    unity = 'unity'
}

const technologies: Record<Technologies, Technology> = {
    [Technologies.vuejs]: new Technology('Vue.js', '42b883'),
    [Technologies.vuerouter]: new Technology('Vue Router', '42b883'),
    [Technologies.vuex]: new Technology('Vuex', '42b883'),
    [Technologies.vuetify]: new Technology('Vuetify', '1867c0'),
    [Technologies['3dgraphics']]: new Technology('Grafika 3D', '000000'),
    [Technologies['c++']]: new Technology('C++', '00599c'),
    [Technologies.typescript]: new Technology('TypeScript', '007acc'),
    [Technologies.threejs]: new Technology('Three.js', '049ef4'),
    [Technologies.javascript]: new Technology('JavaScript', 'f7df1e', '323330'),
    [Technologies.csharp]: new Technology('C#', '9a4993'),
    [Technologies.unity]: new Technology('Unity', '000000')
}

export default technologies;