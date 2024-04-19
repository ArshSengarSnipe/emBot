const SettingsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.active || props.hover ? "#BCE29E" : "#8A8A8A"}
      fillRule="evenodd"
      d="M13.278 0c.89 0 1.757.34 2.378.932.62.596.962 1.412.936 2.24.002.187.068.402.188.591.197.313.51.533.88.623.372.086.76.04 1.09-.142 1.593-.847 3.62-.34 4.53 1.131l.775 1.25c.02.034.037.066.052.1.824 1.449.274 3.273-1.257 4.106-.223.12-.403.286-.527.487a1.278 1.278 0 0 0-.15 1.023c.1.348.338.636.672.814.756.405 1.32 1.086 1.545 1.872a2.91 2.91 0 0 1-.338 2.34l-.826 1.282c-.91 1.455-2.937 1.959-4.514 1.11a1.566 1.566 0 0 0-.694-.179h-.008c-.36 0-.729.143-.998.392a1.28 1.28 0 0 0-.42.95C16.585 22.624 15.098 24 13.279 24h-1.56c-1.828 0-3.315-1.383-3.315-3.084a1.183 1.183 0 0 0-.188-.617 1.43 1.43 0 0 0-.876-.634c-.362-.09-.76-.04-1.085.135a3.59 3.59 0 0 1-2.543.284 3.306 3.306 0 0 1-1.991-1.471l-.778-1.247c-.91-1.47-.368-3.351 1.207-4.2.447-.239.725-.686.725-1.165 0-.48-.278-.928-.725-1.168C.573 9.981.032 8.093.941 6.625l.844-1.289c.897-1.452 2.926-1.964 4.507-1.119.216.12.45.18.687.182.776 0 1.424-.595 1.436-1.327-.005-.808.338-1.583.961-2.167A3.414 3.414 0 0 1 11.718 0h1.56Zm0 1.737h-1.56c-.386 0-.746.14-1.019.393-.271.254-.42.59-.417.95-.026 1.693-1.513 3.056-3.314 3.056a3.393 3.393 0 0 1-1.617-.419c-.678-.359-1.564-.138-1.96.505l-.843 1.29c-.386.622-.15 1.446.537 1.818 1.02.549 1.655 1.573 1.655 2.67 0 1.099-.636 2.121-1.657 2.671-.684.369-.92 1.188-.524 1.825l.785 1.26c.194.325.512.56.879.657.366.095.769.054 1.105-.12a3.456 3.456 0 0 1 1.646-.41c.285 0 .57.034.849.103.841.211 1.572.735 2.005 1.438.281.441.437.957.442 1.482 0 .753.65 1.357 1.448 1.357h1.56c.795 0 1.444-.6 1.448-1.34-.005-.818.339-1.595.967-2.18a3.382 3.382 0 0 1 2.352-.9 3.583 3.583 0 0 1 1.596.41c.693.37 1.578.15 1.978-.488l.827-1.282c.184-.295.237-.666.14-1.008a1.352 1.352 0 0 0-.67-.813c-.77-.412-1.318-1.077-1.546-1.874a2.907 2.907 0 0 1 .337-2.338 3.182 3.182 0 0 1 1.209-1.123c.674-.367.91-1.188.519-1.827a.635.635 0 0 1-.044-.08l-.73-1.177c-.396-.643-1.28-.864-1.973-.497-.75.412-1.64.53-2.496.32-.855-.205-1.572-.71-2.019-1.42a2.805 2.805 0 0 1-.447-1.49 1.33 1.33 0 0 0-.41-1.012 1.51 1.51 0 0 0-1.038-.407Zm-.775 6.34c2.324 0 4.214 1.761 4.214 3.924 0 2.162-1.89 3.92-4.214 3.92-2.323 0-4.213-1.758-4.213-3.92 0-2.163 1.89-3.923 4.213-3.923Zm0 1.738c-1.294 0-2.347.981-2.347 2.186 0 1.204 1.053 2.183 2.347 2.183 1.295 0 2.348-.979 2.348-2.183 0-1.205-1.053-2.186-2.348-2.186Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SettingsIcon;
