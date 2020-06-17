import { Component } from 'vue';
import GitHubIcon from '@/components/Icons/GitHubIcon.vue';

enum Sources {
    GitHub
}

class Source {
    public readonly name: string;
    public readonly icon: Component;

    constructor(name: string, icon: Component) {
        this.name = name;
        this.icon = icon;
    }
}

const sources: Record<Sources, Source> = {
    [Sources.GitHub]: new Source('GitHub', GitHubIcon)
}

export default Sources;
export { sources };