import os, pwd, stat

fileOwner = {
    'madwindevelopersorg/db.sqlite3' : 'www-data',
    'madwindevelopersorg/environment.ini' : 'www-data',
    'madwindevelopersorg/environment.ini.lock' : 'www-data',
}

filePerms = {
    'madwindevelopersorg/environment.ini' : stat.S_IRUSR | stat.S_IWUSR
}

for f in filePerms:
    user = pwd.getpwnam(fileOwner[f])
    os.chown(f, user.pw_uid, user.pw_gid)

for f in filePerms:
    os.chmod(f, filePerms[f])
