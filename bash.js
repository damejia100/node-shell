process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const pwd = process.cwd();
  // const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + pwd) ;
  process.stdout.write('\nprompt > ');
});
