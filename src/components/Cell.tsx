import { Direction } from '../common/types';
import { directionToRotation } from '../common/utils';

type Props = {
    direction: Direction;
};

const Cell = (props: Props) => {
    const { direction } = props;
    const [hourHandRot, minuteHandRot] = directionToRotation(direction);

    return (
        <div className="clock bg-secondary">
            <div
                className="hand hour-hand bg-tertiary"
                style={{ transform: `rotate(${hourHandRot}deg)` }}
            ></div>
            <div
                className="hand minute-hand bg-tertiary"
                style={{ transform: `rotate(${minuteHandRot}deg)` }}
            ></div>
        </div>
    );
};

export default Cell;
