import * as React from 'react';
import Svg, {Circle, Path, G} from 'react-native-svg'

function SvgPlanet(props){
  return(
    <Svg height={512} viewBox="0 0 512 512" width={512} className="" {...props}>
      <Circle cx={256} cy={256} fill="#fff7bf" r={160} />
      <Path
        d="M196 286H98.82a158.844 158.844 0 0013.272 40H196c11.046 0 20-8.954 20-20s-8.954-20-20-20zM388.298 166H296c-11.046 0-20 8.954-20 20s8.954 20 20 20h112.021a159.38 159.38 0 00-19.723-40zM408.021 306H336c-11.046 0-20 8.954-20 20s8.954 20 20 20h52.298a159.38 159.38 0 0019.723-40z"
        fill="#ffee80"
      />
      <Circle cx={416} cy={436} fill="#fff" r={40} />
      <Circle cx={482} cy={316} fill="#e6e6f9" r={20} />
      <G fill="#ffee80">
        <Circle cx={216} cy={146} r={10} />
        <Circle cx={326} cy={238} r={10} />
        <Circle cx={266} cy={366} r={20} />
        <Circle cx={186} cy={176} r={20} />
      </G>
      <Circle cx={96} cy={76} fill="#fff" r={40} />
      <Circle cx={30} cy={216} fill="#ecf2f3" r={20} />
      <G fill="#ffa96b">
        <Path d="M426 256c0-12.693-1.409-25.062-4.06-36.968 32.53-33.648 43.719-59.891 33.246-78.032-10.467-18.132-38.836-21.553-84.305-10.193C340.603 103.001 300.252 86 256 86c-93.738 0-170 76.262-170 170 0 12.694 1.41 25.064 4.061 36.971C57.536 326.619 46.343 352.864 56.814 371c6.45 11.171 19.665 16.766 39.472 16.766 12.383 0 27.347-2.19 44.839-6.568C171.402 409.001 211.751 426 256 426c93.738 0 170-76.262 170-170zm-68.137 110H306c-5.523 0-10 4.477-10 10s4.477 10 10 10h24.77c-22.024 12.717-47.562 20-74.77 20-34.538 0-66.382-11.74-91.766-31.43 38.438-12.316 82.672-32.49 126.766-57.948 17.089-9.867 33.497-20.149 48.931-30.622h63.053c-6.378 31.294-22.534 59.069-45.121 80zM406 256c0 3.361-.123 6.693-.341 10h-37.748c13.386-10.101 25.71-20.246 36.719-30.243A150.729 150.729 0 01406 256zm14.092-111.555c9.342.557 15.653 2.884 17.773 6.555 2.178 3.773.925 10.628-3.53 19.301-3.979 7.747-10.462 16.736-19.006 26.419a170.105 170.105 0 00-28.412-49.048c13.039-2.638 24.357-3.75 33.175-3.227zM256 106c27.208 0 52.746 7.283 74.77 20H256c-5.523 0-10 4.477-10 10s4.477 10 10 10h100c.58 0 1.145-.06 1.698-.155 19.483 18.001 34.194 41.089 42.005 67.134-17.947 17.346-40.436 35.395-65.946 53.021H276c-5.523 0-10 4.477-10 10s4.477 10 10 10h27.208A804.954 804.954 0 01281 299.301c-47.301 27.309-94.554 48.304-134.021 59.614-23.245-24.611-38.266-57.061-40.638-92.915H176c5.523 0 10-4.477 10-10s-4.477-10-10-10h-69.659a149.522 149.522 0 012.675-20H216c5.523 0 10-4.477 10-10s-4.477-10-10-10H114.58c20.638-58.2 76.235-100 141.42-100zM92.615 367.594c-9.739-.479-16.302-2.82-18.48-6.594-2.168-3.755-.935-10.569 3.472-19.189 3.974-7.772 10.478-16.802 19.063-26.532a170.077 170.077 0 0028.412 49.047c-12.692 2.57-23.747 3.696-32.467 3.268zM456 426c-16.542 0-30-13.458-30-30 0-5.523-4.477-10-10-10s-10 4.477-10 10c0 16.542-13.458 30-30 30-5.523 0-10 4.477-10 10s4.477 10 10 10c16.542 0 30 13.458 30 30 0 5.523 4.477 10 10 10s10-4.477 10-10c0-16.542 13.458-30 30-30 5.523 0 10-4.477 10-10s-4.477-10-10-10zm-40 20.035A50.432 50.432 0 00405.965 436 50.432 50.432 0 00416 425.965 50.432 50.432 0 00426.035 436 50.432 50.432 0 00416 446.035zM482 286c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30zm0 40c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zM56 86c16.542 0 30 13.458 30 30 0 5.523 4.477 10 10 10s10-4.477 10-10c0-16.542 13.458-30 30-30 5.523 0 10-4.477 10-10s-4.477-10-10-10c-16.542 0-30-13.458-30-30 0-5.523-4.477-10-10-10s-10 4.477-10 10c0 16.542-13.458 30-30 30-5.523 0-10 4.477-10 10s4.477 10 10 10zm40-20.035A50.432 50.432 0 00106.035 76 50.432 50.432 0 0096 86.035 50.432 50.432 0 0085.965 76 50.432 50.432 0 0096 65.965zM30 186c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30zm0 40c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" />
      </G>
    </Svg>
  )
}

export default SvgPlanet