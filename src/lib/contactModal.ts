export const CONTACT_MODAL_EVENT = '7lab:open-contact'

export function openContactModal() {
  window.dispatchEvent(new CustomEvent(CONTACT_MODAL_EVENT))
}
