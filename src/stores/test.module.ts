import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '@/store';

@Module({ name: 'test', dynamic: true, store })
export default class TestModule extends VuexModule {
  public count: number = 0;

  @Mutation
  public increment(n: number) {
    this.count = this.count + n;
  }
}
