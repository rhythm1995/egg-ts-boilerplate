import { Controller } from 'egg';

export default class HomeController extends Controller {
  public index() {
    const { ctx } = this;

    const data: string = this.service.home.index();

    ctx.body = data;
    ctx.status = 200;
  }
}
