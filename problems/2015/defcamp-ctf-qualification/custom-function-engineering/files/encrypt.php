<?php

function xorIt($charOne, $charTwo)
{
      return $charOne ^ $charTwo;
}

function asciiValue($char)
{
      return ord($char);
}

function encrypt($plainText)
{
      $length = strlen($plainText);
      $space = 0xA;
      $cipherText = "";

      for ($i = 0; $i < $length; $i++) {
              if ($i + $space < $length - 1) {
                      $cipherText .= xorIt($plainText[$i], $plainText[$i + $space]);
              } else {
                      $cipherText .= xorIt($plainText[$i], $plainText[$space]);
              }

              $space = (asciiValue($plainText[$i]) % 2 == 0 ? $space + 1 : $space - 1);
      }

      return bin2hex($cipherText);
}

?>