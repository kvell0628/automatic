include(../qtbindingsbase.pri)
TARGET = qtscript_xml
QT -= gui
QT += xml
SOURCES += plugin.cpp
HEADERS += plugin.h
INCLUDEPATH += ./include/
include($$GENERATEDCPP/com_trolltech_qt_xml/com_trolltech_qt_xml.pri)
