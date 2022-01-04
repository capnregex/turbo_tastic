import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  reset() {
    console.log('reset()',this);
    this.element.reset();
  }
}
