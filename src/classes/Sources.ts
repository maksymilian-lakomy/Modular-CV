import { Component } from 'vue';
import GitHubIcon from '@/components/Icons/GitHubIcon.vue';
import MediumIcon from '@/components/Icons/MediumIcon.vue';
import HTTPIcon from '@/components/Icons/HTTPIcon.vue';

enum Sources {
    GitHub,
    Medium,
    Web
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
    [Sources.GitHub]: new Source('GitHub', GitHubIcon),
    [Sources.Medium]: new Source('Medium', MediumIcon),
    [Sources.Web]: new Source('Web', HTTPIcon)
}

export default Sources;
export { sources };