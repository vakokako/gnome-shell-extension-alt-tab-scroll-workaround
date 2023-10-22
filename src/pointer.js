import Clutter from "gi://Clutter";

const seat = Clutter.get_default_backend().get_default_seat();
const vdevice = seat.create_virtual_device(
  Clutter.InputDeviceType.POINTER_DEVICE
);

export default function movePointer() {
  const [x, y] = global.get_pointer();
  vdevice.notify_absolute_motion(global.get_current_time(), x, y);
}
